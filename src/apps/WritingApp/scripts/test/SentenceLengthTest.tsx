import { testParagraphProps, testSentenceProps } from 'apps/WritingApp/scripts';
import Test from '../Test';

const Error = {
	name: '긴 문장',
	description: '문장의 길이가 최대 글자 수를 초과합니다.',
	message: '문장의 길이가 최대 글자 수를 초과합니다.',
};

class SentenceLengthTest extends Test {
	constructor() {
		super(Error.name, Error.description, Error.message);
	}

	testParagraph({ paragraph }: testParagraphProps): boolean {
		return true;
	}

	testSentence({ sentence, config }: testSentenceProps): boolean {
		return sentence.length <= config.SENTENCE_LENGTH.value;
	}
}
export default SentenceLengthTest;
