const positions = ['LT', 'CT', 'RT', 'LC', 'CC', 'RC', 'LD', 'CD', 'RD'];
const BLACK = 'black';
const WHITE = 'real-white';

const LT_TITLE_BACK = 'LT_TITLE_BACK';
const CT_TITLE_BACK = 'CT_TITLE_BACK';
const RT_TITLE_BACK = 'RT_TITLE_BACK';
const LC_TITLE_BACK = 'LC_TITLE_BACK';
const CC_TITLE_BACK = 'CC_TITLE_BACK';
const RC_TITLE_BACK = 'RC_TITLE_BACK';
const LD_TITLE_BACK = 'LD_TITLE_BACK';
const CD_TITLE_BACK = 'CD_TITLE_BACK';
const RD_TITLE_BACK = 'RD_TITLE_BACK';

const LT_TITLE_FRONT = 'LT_TITLE_FRONT';
const CT_TITLE_FRONT = 'CT_TITLE_FRONT';
const RT_TITLE_FRONT = 'RT_TITLE_FRONT';
const LC_TITLE_FRONT = 'LC_TITLE_FRONT';
const CC_TITLE_FRONT = 'CC_TITLE_FRONT';
const RC_TITLE_FRONT = 'RC_TITLE_FRONT';
const LD_TITLE_FRONT = 'LD_TITLE_FRONT';
const CD_TITLE_FRONT = 'CD_TITLE_FRONT';
const RD_TITLE_FRONT = 'RD_TITLE_FRONT';

const AUTHOR_FRONT = 'AUTHOR_FRONT';
const AUTHOR_BACK = 'AUTHOR_BACK';

const ONE_LINE_SINGLE = ['single'];
const ONE_LINE_DOUBLE = ['double'];
const ONE_LINE_MULTI = ['multi'];
const TWO_LINE_SINGLE_DOUBLE = ['single', 'double'];
const TWO_LINE_SINGLE_MULTI = ['single', 'multi'];
const TWO_LINE_DOUBLE_MULTI = ['double', 'multi'];
const ALL_LINE = ['single', 'double', 'multi'];

export const BookTitleType = {
	LT_TITLE_FRONT,
	CT_TITLE_FRONT,
	RT_TITLE_FRONT,
	LC_TITLE_FRONT,
	CC_TITLE_FRONT,
	RC_TITLE_FRONT,
	LD_TITLE_FRONT,
	CD_TITLE_FRONT,
	RD_TITLE_FRONT,
	LT_TITLE_BACK,
	CT_TITLE_BACK,
	RT_TITLE_BACK,
	LC_TITLE_BACK,
	CC_TITLE_BACK,
	RC_TITLE_BACK,
	LD_TITLE_BACK,
	CD_TITLE_BACK,
	RD_TITLE_BACK,
};

export const BookAuthorType = {
	AUTHOR_FRONT,
	AUTHOR_BACK,
};

export const BookCoverStyles: { [key: number]: Array<(string | string[])[]> } = {
	0: [
		[LT_TITLE_FRONT, ALL_LINE, AUTHOR_FRONT],
		[CT_TITLE_FRONT, ALL_LINE, AUTHOR_FRONT],
		[RT_TITLE_FRONT, ALL_LINE, AUTHOR_FRONT],
		[LC_TITLE_FRONT, ALL_LINE, AUTHOR_FRONT],
		[CC_TITLE_FRONT, ALL_LINE, AUTHOR_FRONT],
		[RC_TITLE_FRONT, ALL_LINE, AUTHOR_FRONT],
		[LD_TITLE_FRONT, ALL_LINE, AUTHOR_FRONT],
		[CD_TITLE_FRONT, ALL_LINE, AUTHOR_FRONT],
		[RD_TITLE_FRONT, ALL_LINE, AUTHOR_FRONT],
	],
	1: [
		[LT_TITLE_BACK, ALL_LINE, AUTHOR_FRONT],
		[CT_TITLE_BACK, ALL_LINE, AUTHOR_FRONT],
		[RT_TITLE_BACK, ALL_LINE, AUTHOR_FRONT],
		[CC_TITLE_BACK, ALL_LINE, AUTHOR_FRONT],
		[CD_TITLE_FRONT, ONE_LINE_SINGLE, AUTHOR_BACK],
	],
	2: [
		[RT_TITLE_FRONT, ALL_LINE, AUTHOR_FRONT],
		[RC_TITLE_FRONT, ALL_LINE, AUTHOR_FRONT],
		[RD_TITLE_FRONT, ALL_LINE, AUTHOR_FRONT],
	],
	3: [
		[CT_TITLE_BACK, TWO_LINE_SINGLE_DOUBLE, AUTHOR_BACK],
		[RT_TITLE_BACK, ALL_LINE, AUTHOR_BACK],
	],
	4: [
		[RT_TITLE_BACK, ALL_LINE, AUTHOR_BACK],
		[RC_TITLE_BACK, ALL_LINE, AUTHOR_BACK],
	],
	5: [
		[LT_TITLE_BACK, ALL_LINE, AUTHOR_BACK],
		[RT_TITLE_FRONT, ALL_LINE, AUTHOR_BACK],
		[LC_TITLE_BACK, ALL_LINE, AUTHOR_BACK],
		[CC_TITLE_BACK, ALL_LINE, AUTHOR_BACK],
		[RC_TITLE_BACK, ALL_LINE, AUTHOR_BACK],
		[RD_TITLE_BACK, ALL_LINE, AUTHOR_BACK],
	],
	6: [
		[LT_TITLE_FRONT, ALL_LINE, AUTHOR_BACK],
		[CT_TITLE_FRONT, ALL_LINE, AUTHOR_BACK],
		[RT_TITLE_FRONT, ALL_LINE, AUTHOR_BACK],
		[LD_TITLE_BACK, ALL_LINE, AUTHOR_FRONT],
		[CD_TITLE_BACK, ALL_LINE, AUTHOR_FRONT],
		[RD_TITLE_BACK, ALL_LINE, AUTHOR_FRONT],
	],
	7: [
		[LT_TITLE_BACK, ALL_LINE, AUTHOR_FRONT],
		[CT_TITLE_BACK, ALL_LINE, AUTHOR_FRONT],
		[RT_TITLE_BACK, ALL_LINE, AUTHOR_FRONT],
		[CC_TITLE_BACK, ALL_LINE, AUTHOR_FRONT],
		[RC_TITLE_BACK, ALL_LINE, AUTHOR_FRONT],
		[LD_TITLE_FRONT, ALL_LINE, AUTHOR_BACK],
	],
};
