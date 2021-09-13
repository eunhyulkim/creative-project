import React from 'react';
import test from 'apps/WritingApp/scripts/test/BannedTest';
import { CONFIG_INITIAL_STATE } from 'apps/WritingApp/scripts/Config';
import { before } from 'lodash';

const config = CONFIG_INITIAL_STATE;
const ENG_SYM = 'BANNED';
const rightParagraphs = [[['제외']], [['단어']], [['제외단어']]];
const wrongParagraphs = [
	[['금지어']],
	[['금기어']],
	[['제외어']],
	[['제외 단어']],
	[['제외 단어다']],
	[['금지어가 포함된 문장']],
];

beforeAll(() => {
	config[ENG_SYM].value = '금지어,금기어, 제외어,  제외 단어';
});

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
