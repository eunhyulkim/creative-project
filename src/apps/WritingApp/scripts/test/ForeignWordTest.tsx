import { testParagraphProps, testSentenceProps } from 'apps/WritingApp/scripts';
import Test from '../Test';

const Error = {
	symbol: 'FOREIGN_WORD',
	name: '외래어',
	description: '기술 용어가 외래어 표기에 맞지 않습니다.',
	message: '기술 용어 외래어 표기에 맞지 않습니다.',
};

const foreignWords = [
	'어플리케이션',
	'블럭',
	'비지니스',
	'콜렉션',
	'컨텐츠',
	'콘트롤',
	'데스크탑',
	'디렉토리',
	'플래쉬',
	'라이센스',
	'메세지',
	'메소드',
	'네비게이션',
	'네트웍',
	'오리지날',
	'퍼즈',
	'프리젠테이션',
	'릴리즈',
	'썸네일',
];

class ForeignWordTest extends Test {
	constructor() {
		super(Error.symbol, Error.name, Error.description, Error.message);
	}

	testParagraph({ paragraph }: testParagraphProps): boolean {
		return true;
	}

	testSentence({ sentence, config }: testSentenceProps): boolean {
		const words = sentence.split(/[\s,.?!]+/);
		return words.every((word) => foreignWords.every((foreignWord) => !word.includes(foreignWord)));
	}
}
export default ForeignWordTest;
