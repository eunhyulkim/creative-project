import React from 'react';
import SentenceLengthTest from 'apps/WritingApp/scripts/test/SentenceLengthTest';
import { CONFIG_INITIAL_STATE } from 'apps/WritingApp/scripts/Config';
import { fireEvent, render } from '@testing-library/react';

const config = CONFIG_INITIAL_STATE;
config.SENTENCE_LENGTH.value = 10;
const rightParagraphs = [['abcdefghij'], ['가나다라마바사아자차']];
const wrongParagraphs1 = [['abcdefghijk'], ['기나다라마바사아자차']];
const wrongParagraphs2 = [['abcdefghij'], ['기나다라마바사아자차카']];
const test = new SentenceLengthTest();
describe('Test', () => {
	it('toggle on', () => {
		config.SENTENCE_LENGTH.checked = true;
		expect(test.run(rightParagraphs, config)).toBeNull();
		expect(test.run(wrongParagraphs1, config)).not.toBeNull();
		expect(test.run(wrongParagraphs2, config)).not.toBeNull();
	});

	it('toggle off', () => {
		config.SENTENCE_LENGTH.checked = false;
		expect(test.run(rightParagraphs, config)).toBeNull();
		expect(test.run(wrongParagraphs1, config)).toBeNull();
		expect(test.run(wrongParagraphs2, config)).toBeNull();
	});
});
