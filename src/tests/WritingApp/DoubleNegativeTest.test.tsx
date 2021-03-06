import React from 'react';
import DoubleNegativeTest from 'apps/WritingApp/scripts/test/DoubleNegativeTest';
import { CONFIG_INITIAL_STATE } from 'apps/WritingApp/scripts/Config';

const config = CONFIG_INITIAL_STATE;
const ENG_SYM = 'DOUBLE_NEGATIVE';
const rightParagraphs = [[['이번에는 네가 가야 한다.']], [['네가 못한 게 있을리가 있어?']]];
const wrongParagraphs = [
	[['이번에는 네가 가지 않으면 안 된다.']],
	[['그렇게 행동 안 하면 안 될까?']],
	[['네가 못한게 있을리가 없잖아']],
];
const test = new DoubleNegativeTest();
describe.each(rightParagraphs)('RightCase', (rightParagraph) => {
	it('toggle on', () => {
		config[ENG_SYM].checked = true;
		expect(test.run([rightParagraph], config)).toBeNull();
	});

	it('toggles off', () => {
		config[ENG_SYM].checked = false;
		expect(test.run([rightParagraph], config)).toBeNull();
	});
});

describe.each(wrongParagraphs)('WrongCase', (wrongParagraph) => {
	it('toggle on', () => {
		config[ENG_SYM].checked = true;
		expect(test.run([wrongParagraph], config)).not.toBeNull();
	});

	it('toggles off', () => {
		config[ENG_SYM].checked = false;
		expect(test.run([wrongParagraph], config)).toBeNull();
	});
});
