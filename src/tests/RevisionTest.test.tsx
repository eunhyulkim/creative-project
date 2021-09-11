import React from 'react';
import test from 'scripts/test/RevisionTest';
import { CONFIG_INITIAL_STATE } from 'scripts/Config';

const config = CONFIG_INITIAL_STATE;
const ENG_SYM = 'REVISION';
config[ENG_SYM].options['- 함체'] = true;
config[ENG_SYM].options['* 요체'] = true;
const rightParagraphs = [
	[['뭐라뭐라함.']],
	[['뭐라뭐라다!']],
	[['뭐라뭐라요;']],
	[['뭐라뭐라냥~']],
	[['- 뭐라뭐라함.']],
	// [['* 뭐라뭐라요;']],
];
const wrongParagraphs = [
	[['- 뭐라뭐라다!']],
	[['- 뭐라뭐라요;']],
	[['- 뭐라뭐라냥~']],
	[['* 뭐라뭐라함.']],
	[['* 뭐라뭐라다!']],
	[['* 뭐라뭐라냥~']],
];

describe.each(rightParagraphs)('RightCase', (rightParagraph) => {
	it('toggle on', () => {
		config[ENG_SYM].checked = true;
		expect(test([rightParagraph], config)).toBeNull();
	});

	it('toggles off', () => {
		config[ENG_SYM].checked = false;
		expect(test([rightParagraph], config)).toBeNull();
	});
});

describe.each(wrongParagraphs)('WrongCase', (wrongParagraph) => {
	it('toggle on', () => {
		config[ENG_SYM].checked = true;
		expect(test([wrongParagraph], config)).not.toBeNull();
	});

	it('toggles off', () => {
		config[ENG_SYM].checked = false;
		expect(test([wrongParagraph], config)).toBeNull();
	});
});
