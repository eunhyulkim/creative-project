import _ from 'lodash';
import { WritingError, Test, Config } from '../type';

const Error = {
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

function sentenceTest(paragraph: string[], pidx: number, sentence: string, sidx: number, config: Config): boolean {
	const words = sentence.split(/[\s,.?!]+/);
	return words.every((word) => foreignWords.every((foreignWord) => !word.includes(foreignWord)));
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

const ForeignWordTest: Test = (paragraphs, config) => {
	if (!config.FOREIGN_WORD.checked) return null;

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

export default ForeignWordTest;
