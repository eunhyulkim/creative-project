import { Cover, CoverCanvas, BookTable, BookContent } from 'apps/CreateBookApp';
import _ from 'lodash';
import { Dispatch } from 'redux';
import html2canvas from 'html2canvas';
import ReactDOM from 'react-dom';
import JsPDF from 'jspdf';
import { BookCoverStyles } from 'config';
import { isJsxSpreadAttribute } from 'typescript';

const SET_TITLE = 'book/SET_TITLE';
const SET_TITLE_STYLE = 'book/SET_TITLE_STYLE';
const SET_COVER = 'book/SET_COVER';
const SET_AUTHOR = 'book/SET_AUTHOR';
const SET_AUTHOR_STYLE = 'book/SET_AUTHOR_STYLE';
const SET_COLOR = 'book/SET_COLOR';
const SET_CHAPTER = 'book/SET_CHAPTER';
const CREATE_BOOK = 'book/CREATE';
const RESET = 'book/RESET';

export interface TitleStyle {
	line: string;
	align: string;
	size: string;
	position: string;
	color: string;
}

export interface AuthorStyle {
	color: string;
}

export interface Chapter {
	title: string;
	body: string;
}

type ActionType =
	| ReturnType<typeof BookTitleSet>
	| ReturnType<typeof BookCoverSet>
	| ReturnType<typeof BookTitleStyleSet>
	| ReturnType<typeof BookAuthorStyleSet>
	| ReturnType<typeof BookChapterAdd>;

export type ThunkCreator = (
	title?: string,
	body?: string
) => (dispatch: Dispatch, getState?: () => { book: Book }) => void;

const BookTitleSet = (bookTitle: string): { type: string; payload: string } => ({
	type: SET_TITLE,
	payload: bookTitle,
});
const BookCoverSet = (coverId: number): { type: string; payload: number } => ({ type: SET_COVER, payload: coverId });
const BookCoverShuffle = (): { type: string; payload: number } => ({
	type: SET_COVER,
	payload: _.random(0, 7),
});
const BookAuthorSet = (author: string): { type: string; payload: string } => ({ type: SET_AUTHOR, payload: author });
const BookColorSet = (color: string): { type: string; payload: string } => ({ type: SET_COLOR, payload: color });
const BookColorShuffle = (book: Book): { type: string; payload: string } => ({
	type: SET_COLOR,
	payload: colors[_.random(0, colors.length - 1)],
});
const BookTitleStyleSet = (titleStyle: TitleStyle): { type: string; payload: TitleStyle } => ({
	type: SET_TITLE_STYLE,
	payload: titleStyle,
});
const BookAuthorStyleSet = (authorStyle: AuthorStyle): { type: string; payload: AuthorStyle } => ({
	type: SET_TITLE_STYLE,
	payload: authorStyle,
});

export const colors = [
	'#009473', // 초록(W)
	'#9B1B30', // 와인(W)
	'#DD4124', // 주황(W)
	'#C74375', // 핑크(W)
	'#9BB7B4', // 연그레이(W)
	'#5A5B9F', // 보라(W)
	'#88B04B', // 올리브(W)
	'#FF6FB1', // 분홍(W)
	'#0F4C81', // 청색(W)
	'#F0C05A', // 노랑(B)
];

const COLOR_BLACK_CASE = '#F0C05A';
const WHITE = '#FFFFFF';
const BLACK = '#000000';

const BookTitleStyleShuffle: (book: Book) => { type: string; payload: TitleStyle } = (book) => {
	const [titlePosition, titleLines, __] = _.sample(BookCoverStyles[book.cover]) as string[];

	const position = titlePosition.substring(0, 2);
	console.log(titlePosition, position, 'TEST');
	const isFront = titlePosition.substring(9) === 'FRONT';
	const line = _.sample(titleLines) as string;
	const size = _.sample(['large', 'middle', 'small']) || 'middle';

	const getAlign = (titleAlign: string) => {
		if (titleAlign === 'L') return 'left';
		if (titleAlign === 'R') return 'right';
		return _.sample(['left', 'right', 'middle']) || 'middle';
	};

	const getColor = (front: boolean) => {
		if (front && book.color !== COLOR_BLACK_CASE) return WHITE;
		return BLACK;
	};

	const align = getAlign(position[0]);
	const color = getColor(isFront);

	return {
		type: SET_TITLE_STYLE,
		payload: {
			position,
			line,
			align,
			size,
			color,
		},
	};
};

const BookAuthorStyleShuffle: (book: Book) => { type: string; payload: AuthorStyle } = (book) => {
	const key = `${book.titleStyle.position}_TITLE`;
	const authorStyle = BookCoverStyles[book.cover].filter((style) => style[0].includes(key))[0][2] as string;
	console.log(authorStyle, book.color);
	const front = authorStyle.substring(7) === 'FRONT';
	const color = front && book.color !== COLOR_BLACK_CASE ? WHITE : BLACK;
	return {
		type: SET_AUTHOR_STYLE,
		payload: {
			color,
		},
	};
};

const BookCoverStyleShuffle: ThunkCreator = () => (dispatch: Dispatch, getState) => {
	if (!getState) return;
	dispatch(BookCoverShuffle());
	dispatch(BookColorShuffle(getState().book));
	dispatch(BookTitleStyleShuffle(getState().book));
	dispatch(BookAuthorStyleShuffle(getState().book));
};

const BookChapterAdd = (title: string, body: string): { type: string; payload: Chapter } => ({
	type: SET_CHAPTER,
	payload: { title, body },
});
const BookReset = (): { type: string; payload: string } => ({
	type: RESET,
	payload: '',
});

const BookCreate: ThunkCreator = () => async (__, getState) => {
	if (!getState) return;
	const { book } = getState();
	const { title, titleStyle, author, authorStyle, cover, color, chapters } = book;
	const container = document.getElementById('html-temp-container') as HTMLDivElement;
	const status = document.querySelector('.status-value') as HTMLDivElement;
	const pages = [] as number[];
	const doc = new JsPDF('p', 'mm', 'a5');

	renderCover();

	function renderCover() {
		ReactDOM.render(
			<CoverCanvas
				title={title}
				titleStyle={titleStyle}
				authorStyle={authorStyle}
				author={author}
				cover={cover}
				color={color}
			/>,
			container,
			async () => {
				setProgress(10);
				await addPage(false);
				setProgress(15);
				await renderChapter();
			}
		);
	}

	async function renderChapter(chapterNumber = 1, prevRenderedPage = 0) {
		const chapter = chapters[chapterNumber - 1];
		ReactDOM.render(
			<BookContent page={prevRenderedPage + 1} title={chapter.title} body={chapter.body} />,
			container,
			async () => {
				const header: HTMLDivElement = document.querySelector('.content--title') as HTMLDivElement;
				const body = document.querySelector('.content--body') as HTMLDivElement;
				const element: HTMLDivElement = body.querySelector('.wrapper') as HTMLDivElement;
				const footer: HTMLDivElement = document.querySelector('.content--number') as HTMLDivElement;
				if (!header || !body || !element || !footer) return;

				const prepareRenderChapter = () => {
					header.classList.remove('none');
					body.classList.remove('extend');
					element.style.top = '0px';
					pages.push(prevRenderedPage + 1);
					return body.scrollHeight;
				};

				const restHeight = prepareRenderChapter();

				const prevStatus = parseInt(status.getAttribute('data-width') || '', 10);
				const renderedPage = await renderPage(restHeight, prevRenderedPage + 1, true);
				setProgress(Math.floor(prevStatus + 70 / chapters.length));
				if (chapterNumber < chapters.length) {
					renderChapter(chapterNumber + 1, renderedPage);
				} else {
					renderTable();
				}

				async function renderPage(rest: number, page: number, isFirstPage = false): Promise<number> {
					if (rest <= 0) return page - 1;

					prepareRenderPage();
					await addPage();
					afterRenderPage();

					const lastRenderedPage = await renderPage(rest - (isFirstPage ? 540 : 630), page + 1);
					return lastRenderedPage;

					function prepareRenderPage() {
						if (page % 2 === 0) {
							header.classList.add('right');
							footer.classList.add('right');
						} else {
							header.classList.remove('right');
							footer.classList.remove('right');
						}
					}

					function afterRenderPage() {
						element.style.top = `${String((parseInt(element.style.top, 10) || 0) - (header ? 540 : 630))}px`;
						const space = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
						footer.innerHTML =
							(page + 1) % 2 === 0
								? `${chapter.title}${space}${String(page + 1)}`
								: `${String(page + 1)}${space}${chapter.title}`;

						if (isFirstPage) {
							header.classList.add('none');
							body.classList.add('extend');
						}
						const presentStatus = parseInt(status.getAttribute('data-width') || '', 10);
						const nextStatus = Math.floor(prevStatus + 70 / chapters.length);
						setProgress(Math.floor(prevStatus + (nextStatus - presentStatus) / 630));
					}
				}
			}
		);
	}

	async function renderTable() {
		ReactDOM.render(<BookTable chapters={chapters} pages={pages} />, container, async () => {
			setProgress(95);
			await addPage(false, true);
			setProgress(100);
			document.querySelector('.status')?.setAttribute('data-complete', 'true');
			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				const blob = doc.output('blob');
				// window.open(doc.output('bloburl') as URL, '_blank');
				window.open(URL.createObjectURL(blob), '_blank');
			} else {
				doc.save(`${author}_${title}`);
			}
			container.remove();
			document.querySelector('.complete-page')?.classList.remove('has-container');
		});
	}

	async function addPage(addPageFlag = true, insertPageFlag = false) {
		const canvas = await html2canvas(container);
		container.appendChild(canvas);
		const image = canvas.toDataURL('image/png');
		if (addPageFlag) doc.addPage('a5', 'p');
		if (insertPageFlag) doc.insertPage(2);
		doc.addImage(image, 'PNG', 0, 0, 148, 210);
		container.removeChild(canvas);
	}

	function setProgress(value: number) {
		status.setAttribute('data-width', `${value}%`);
	}
};

export const BookActions = {
	BookTitleSet,
	BookCoverSet,
	BookCoverShuffle,
	BookAuthorSet,
	BookAuthorStyleSet,
	BookAuthorStyleShuffle,
	BookColorSet,
	BookColorShuffle,
	BookTitleStyleSet,
	BookTitleStyleShuffle,
	BookCoverStyleShuffle,
	BookChapterAdd,
	BookReset,
	BookCreate,
};

export interface Book {
	title: string;
	titleStyle: TitleStyle;
	author: string;
	authorStyle: AuthorStyle;
	cover: number;
	color: string;
	chapters: Array<Chapter>;
}

const initialState = {
	title: '',
	titleStyle: {
		line: 'single',
		align: 'middle',
		size: 'middle',
		position: 'CC',
		color: '#FFFFFF',
	},
	authorStyle: {
		color: '#FFFFFF',
	},
	author: '',
	cover: 0,
	color: '#009473',
	chapters: [] as Array<Chapter>,
};

const BookReducer = (state = initialState, action: ActionType): Book => {
	switch (action.type) {
		case SET_TITLE:
			return { ...state, title: String(action.payload) };
		case SET_COVER:
			return { ...state, cover: +action?.payload };
		case SET_AUTHOR:
			return { ...state, author: String(action.payload) };
		case SET_AUTHOR_STYLE:
			return { ...state, authorStyle: action.payload as AuthorStyle };
		case SET_COLOR:
			return { ...state, color: String(action.payload) };
		case SET_TITLE_STYLE:
			return { ...state, titleStyle: action.payload as TitleStyle };
		case SET_CHAPTER:
			return { ...state, chapters: [...state.chapters, action.payload as Chapter] };
		case RESET:
			return { ...initialState };
		case CREATE_BOOK:
		default:
			return state;
	}
};

export default BookReducer;
