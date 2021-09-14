import { Cover } from 'apps/CreateBookApp';
import _ from 'lodash';
import { Dispatch } from 'redux';

const SET_TITLE = 'book/SET_TITLE';
const SET_TITLE_STYLE = 'book/SET_TITLE_STYLE';
const SET_COVER = 'book/SET_COVER';
const SET_AUTHOR = 'book/SET_AUTHOR';
const SET_COLOR = 'book/SET_COLOR';
const SET_CHAPTER = 'book/SET_CHAPTER';
const RESET = 'book/RESET';

export interface TitleStyle {
	line: string;
	align: string;
	size: string;
	position: string;
}

export interface Chapter {
	title: string;
	body: string;
}

type ActionType =
	| ReturnType<typeof BookTitleSet>
	| ReturnType<typeof BookCoverSet>
	| ReturnType<typeof BookTitleStyleSet>
	| ReturnType<typeof BookChapterAdd>;

type ThunkCreator = (title?: string, body?: string) => (dispatch: Dispatch) => void;

const BookTitleSet = (bookTitle: string): { type: string; payload: string } => ({
	type: SET_TITLE,
	payload: bookTitle,
});
const BookCoverSet = (coverId: number): { type: string; payload: number } => ({ type: SET_COVER, payload: coverId });
const BookCoverShuffle = (): { type: string; payload: number } => ({ type: SET_COVER, payload: _.random(0, 7) });
const BookAuthorSet = (author: string): { type: string; payload: string } => ({ type: SET_AUTHOR, payload: author });
const BookColorSet = (color: string): { type: string; payload: string } => ({ type: SET_COLOR, payload: color });
const BookColorShuffle = (): { type: string; payload: string } => ({
	type: SET_COLOR,
	payload: colors[_.random(0, colors.length - 1)],
});
const BookTitleStyleSet = (titleStyle: TitleStyle): { type: string; payload: TitleStyle } => ({
	type: SET_TITLE_STYLE,
	payload: titleStyle,
});
const BookTitleStyleShuffle: () => { type: string; payload: TitleStyle } = () => ({
	type: SET_TITLE_STYLE,
	payload: {
		line: ['single', 'double', 'multiple'][_.random(0, 2)],
		align: ['left', 'middle', 'right'][_.random(0, 2)],
		size: ['large', 'middle', 'small'][_.random(0, 2)],
		position: ['LT', 'CT', 'RT', 'LC', 'CC', 'RC', 'LD', 'CD', 'RD'][_.random(0, 8)],
	},
});
const BookCoverStyleShuffle: ThunkCreator = () => (dispatch: Dispatch) => {
	dispatch(BookCoverShuffle());
	dispatch(BookTitleStyleShuffle());
	dispatch(BookColorShuffle());
};
const BookChapterAdd = (title: string, body: string): { type: string; payload: Chapter } => ({
	type: SET_CHAPTER,
	payload: { title, body },
});
const BookReset = (): { type: string; payload: string } => ({
	type: RESET,
	payload: '',
});

export const BookActions = {
	BookTitleSet,
	BookCoverSet,
	BookCoverShuffle,
	BookAuthorSet,
	BookColorSet,
	BookColorShuffle,
	BookTitleStyleSet,
	BookTitleStyleShuffle,
	BookCoverStyleShuffle,
	BookChapterAdd,
	BookReset,
};

export interface Book {
	title: string;
	titleStyle: TitleStyle;
	author: string;
	cover: number;
	color: string;
	chapters: Array<Chapter>;
}

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

const initialState = {
	title: '',
	titleStyle: {
		line: 'single',
		align: 'middle',
		size: 'middle',
		position: 'CC',
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
		case SET_COLOR:
			return { ...state, color: String(action.payload) };
		case SET_TITLE_STYLE:
			return { ...state, titleStyle: action.payload as TitleStyle };
		case SET_CHAPTER:
			return { ...state, chapters: [...state.chapters, action.payload as Chapter] };
		case RESET:
			return { ...initialState };
		default:
			return state;
	}
};

export default BookReducer;
