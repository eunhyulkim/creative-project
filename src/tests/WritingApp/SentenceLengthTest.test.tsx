import React from 'react';
import test from 'apps/WritingApp/scripts/test/SentenceLengthTest';
import { CONFIG_INITIAL_STATE } from 'apps/WritingApp/scripts/Config';
import { fireEvent, render } from '@testing-library/react';

const config = CONFIG_INITIAL_STATE;
config.SENTENCE_LENGTH.value = 10;
const rightParagraphs = [['abcdefghij'], ['가나다라마바사아자차']];
const wrongParagraphs1 = [['abcdefghijk'], ['기나다라마바사아자차']];
const wrongParagraphs2 = [['abcdefghij'], ['기나다라마바사아자차카']];

describe('Test', () => {
	it('toggle on', () => {
		config.SENTENCE_LENGTH.checked = true;
		expect(test(rightParagraphs, config)).toBeNull();
		expect(test(wrongParagraphs1, config)).not.toBeNull();
		expect(test(wrongParagraphs2, config)).not.toBeNull();
	});

	it('toggle off', () => {
		config.SENTENCE_LENGTH.checked = false;
		expect(test(rightParagraphs, config)).toBeNull();
		expect(test(wrongParagraphs1, config)).toBeNull();
		expect(test(wrongParagraphs2, config)).toBeNull();
	});
});
