import { Book, Chapter } from 'store/book';
import JsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactDOM from 'react-dom';
import { CoverCanvas, BookTable, BookContent } from 'apps/CreateBookApp/components';

type GlobalProps = {
	container: HTMLDivElement;
	pages: number[];
	book: Book;
	doc: JsPDF;
	status: HTMLDivElement;
};

type ContentProps = {
	header: HTMLDivElement;
	body: HTMLDivElement;
	element: HTMLDivElement;
	footer: HTMLDivElement;
	chapter: Chapter;
	prevStatus: number;
};

function setProgress(value: number) {
	const status = document.querySelector('.status-value') as HTMLDivElement;
	status.setAttribute('data-width', `${value}%`);
}

export default function createBookPDF(book: Book): void {
	const { title, titleStyle, author, authorStyle, cover, color, chapters } = book;
	const container = document.getElementById('html-temp-container') as HTMLDivElement;
	const status = document.querySelector('.status-value') as HTMLDivElement;
	const pages = [] as number[];
	const doc = new JsPDF('p', 'mm', 'a5');
	const tab = { container, pages, book, doc, status };

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
			await addPage(tab, false);
			setProgress(15);
			await renderChapter(tab);
		}
	);
}

async function addPage(globalProps: GlobalProps, addPageFlag = true, insertPageFlag = false) {
	const { container, doc } = globalProps;

	const canvas = await html2canvas(container);
	container.appendChild(canvas);
	const image = canvas.toDataURL('image/png');
	if (addPageFlag) doc.addPage('a5', 'p');
	if (insertPageFlag) doc.insertPage(2);
	doc.addImage(image, 'PNG', 0, 0, 148, 210);
	container.removeChild(canvas);
}

/*
 ** Header : 장 제목
 ** body: 본문 영역
 ** element: scroll 되는 텍스트 콘텐츠
 ** footer: page 번호
 ** NOTE: 제목이 있는 첫 번째 장을 렌더링한 후,
 ** 제목 요소를 숨기고 텍스트를 스크롤링하여 올리는 로직으로 구현
 */

async function renderChapter(globalProps: GlobalProps, chapterNumber = 1, prevRenderedPage = 0) {
	const { book, container, pages } = globalProps;
	const { chapters } = book;
	const chapter = chapters[chapterNumber - 1];
	const status = document.querySelector('.status-value') as HTMLDivElement;

	ReactDOM.render(
		<BookContent page={prevRenderedPage + 1} title={chapter.title} body={chapter.body} />,
		container,
		async () => {
			const header: HTMLDivElement = document.querySelector('.content--title') as HTMLDivElement;
			const body = document.querySelector('.content--body') as HTMLDivElement;
			const element: HTMLDivElement = body.querySelector('.wrapper') as HTMLDivElement;
			const footer: HTMLDivElement = document.querySelector('.content--number') as HTMLDivElement;
			const prevStatus = parseInt(status.getAttribute('data-width') || '', 10);

			const contentProps = { header, body, element, footer, chapter, prevStatus };
			const restHeight = prepareRenderChapter(contentProps);

			const renderedPage = await renderPage(globalProps, contentProps, restHeight, prevRenderedPage + 1, true);
			setProgress(Math.floor(prevStatus + 70 / chapters.length));
			if (chapterNumber < chapters.length) {
				renderChapter(globalProps, chapterNumber + 1, renderedPage);
			} else {
				renderTable(globalProps);
			}
		}
	);

	function prepareRenderChapter(contentProps: ContentProps) {
		const { header, body, element } = contentProps;
		header.classList.remove('none');
		body.classList.remove('extend');
		element.style.top = '0px';
		pages.push(prevRenderedPage + 1);
		return body.scrollHeight;
	}
}

async function renderPage(
	globalProps: GlobalProps,
	contentProps: ContentProps,
	rest: number,
	page: number,
	isFirstPage = false
): Promise<number> {
	if (rest <= 0) return page - 1;
	const { status, book } = globalProps;
	const { header, body, element, footer, chapter, prevStatus } = contentProps;

	prepareRenderPage();
	await addPage(globalProps);
	afterRenderPage();

	const lastRenderedPage = await renderPage(globalProps, contentProps, rest - (isFirstPage ? 540 : 630), page + 1);
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
		const nextStatus = Math.floor(prevStatus + 70 / book.chapters.length);
		setProgress(Math.floor(prevStatus + (nextStatus - presentStatus) / 630));
	}
}

async function renderTable(globalProps: GlobalProps) {
	const { book, container, pages, doc } = globalProps;
	const { chapters, author, title } = book;
	ReactDOM.render(<BookTable chapters={chapters} pages={pages} />, container, async () => {
		setProgress(95);
		await addPage(globalProps, false, true);
		setProgress(100);
		document.querySelector('.status')?.setAttribute('data-complete', 'true');
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			const blob = doc.output('blob');
			window.open(URL.createObjectURL(blob), '_blank');
		} else {
			doc.save(`${author}_${title}`);
		}
		container.remove();
		document.querySelector('.complete-page')?.classList.remove('has-container');
	});
}
