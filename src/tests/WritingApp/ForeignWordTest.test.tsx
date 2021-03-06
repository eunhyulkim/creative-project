import React from 'react';
import ForeignWordTest from 'apps/WritingApp/scripts/test/ForeignWordTest';
import { CONFIG_INITIAL_STATE } from 'apps/WritingApp/scripts/Config';
import { fireEvent, render } from '@testing-library/react';

const config = CONFIG_INITIAL_STATE;
const rightParagraphs = [['애플리케이션이라는 표현'], ['기술용어']];
const wrongParagraphs = [['어플리케이션'], ['기술용어']];
const test = new ForeignWordTest();

describe('Test', () => {
	it('toggle on', () => {
		expect(test.run(rightParagraphs, config)).toBeNull();
		expect(test.run(wrongParagraphs, config)).not.toBeNull();
	});

	it('toggle off', () => {
		config.FOREIGN_WORD.checked = false;
		expect(test.run(rightParagraphs, config)).toBeNull();
		expect(test.run(wrongParagraphs, config)).toBeNull();
	});
});
