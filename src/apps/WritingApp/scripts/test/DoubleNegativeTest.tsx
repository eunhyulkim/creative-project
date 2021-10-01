import { testParagraphProps, testSentenceProps } from 'apps/WritingApp/scripts';
import Test from '../Test';

const Error = {
	symbol: 'DOUBLE_NEGATIVE',
	name: '이중부정',
	description: '이중 부정보다는 긍정문을 사용하는 것을 권장합니다.',
	message: '이중부정을 사용하고 있습니다.',
};

/*
 ** 부정의 4가지 방법을 조합하여 이중 부정 여부를 판단
 ** 1) 아니 + 조사 : 아니면 | 아니라서 | 아니니까 | 아니지 | 아니여 | 아니어 | 아니므로 | 아니기 | 아니죠 | 아니진 | 아니잖 | 아니하 | 아니했 | 아니었 | 아니에 | 아닙니 | 아니다 | 아니요
 ** 2) 안(독립적 단어 사용)
 ** 3) 않 + 조사 : 않다| 않아 | 않았 | 않을 | 않으 | 않잖 | 않지 | 않죠 | 않습 | 않기 | 않진
 ** 4) 못 + 조사 : 못하 | 못했 | 못한 | 못할 | 못해 | 못합
 ** 5) 마 + 조사(독립적 단어 사용) : 말아요 | 마세요 | 말라 | 마라 | 마요
 ** 6) 없(포함적 단어 사용)
 */

const includeWords = [
	'아니면',
	'아니라서',
	'아니니까',
	'아니지',
	'아니여',
	'아니어',
	'아니므로',
	'아니기',
	'아니죠',
	'아니진',
	'아니잖',
	'아니하',
	'아니했',
	'아니었',
	'아니에',
	'아닙니',
	'아니다',
	'아니요',
	'않다',
	'않아',
	'않았',
	'않을',
	'않으',
	'않잖',
	'않지',
	'않죠',
	'않습',
	'않기',
	'않진',
	'못하',
	'못했',
	'못한',
	'못할',
	'못해',
	'못합',
	'없',
];
const matchWords = ['안', '말아요', '마세요', '말라', '마라', '마요'];

class DoubleNegativeTest extends Test {
	constructor() {
		super(Error.symbol, Error.name, Error.description, Error.message);
	}

	testParagraph({ paragraph }: testParagraphProps): boolean {
		return true;
	}

	testSentence({ sentence, config }: testSentenceProps): boolean {
		const filterCallback = (word: string) => {
			return (
				matchWords.some((matchWord) => matchWord === word) ||
				includeWords.some((includeWord) => word.includes(includeWord))
			);
		};
		const words = sentence.split(/[\s,.?!]+/);
		return words.filter(filterCallback).length <= 1;
	}
}
export default DoubleNegativeTest;
