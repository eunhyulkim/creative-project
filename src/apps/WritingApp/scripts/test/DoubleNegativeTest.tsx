import { WritingError, Test, Config } from 'apps/WritingApp';

const Error = {
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

function sentenceTest(paragraph: string[], pidx: number, sentence: string, sidx: number, config: Config): boolean {
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
	const filterCallback = (word: string) => {
		return (
			matchWords.some((matchWord) => matchWord === word) ||
			includeWords.some((includeWord) => word.includes(includeWord))
		);
	};
	const words = sentence.split(/[\s,.?!]+/);
	return words.filter(filterCallback).length <= 1;
}

function paragraphTest(collection: Array<WritingError>, paragraph: string[], pidx: number, config: Config): boolean {
	paragraph.forEach((sentence, sidx) => {
		if (!sentenceTest(paragraph, pidx, sentence, sidx, config)) {
			const error = {
				location: [pidx + 1, sidx + 1],
				expression: sentence,
				...Error,
			};
			collection.push(new WritingError(error));
		}
	});
	return true;
}

const DoubleNegativeTest: Test = (paragraphs, config) => {
	if (!config.DOUBLE_NEGATIVE.checked) return null;

	const collection: Array<WritingError> = [];
	paragraphs.forEach((paragraph, pidx) => {
		if (!paragraphTest(collection, paragraph, pidx, config)) {
			const error = {
				location: [pidx + 1, 0],
				expression: paragraph[0],
				...Error,
			};
			collection.push(new WritingError(error));
		}
	});

	if (collection.length === 0) return null;
	if (collection.length === 1) return collection[0];
	return collection;
};

export default DoubleNegativeTest;
