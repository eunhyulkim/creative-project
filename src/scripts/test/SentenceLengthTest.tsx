import { WritingError, Test, Config } from '../type';

const Error = {
	name: '긴 문장',
	description: '문장의 길이가 최대 글자 수를 초과합니다.',
	message: '문장의 길이가 최대 글자 수를 초과합니다.',
};

function sentenceTest(paragraph: string[], pidx: number, sentence: string, sidx: number, config: Config): boolean {
	return sentence.length <= config.SENTENCE_LENGTH.value;
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

const LongSentenceTest: Test = (paragraphs, config) => {
	if (!config.SENTENCE_LENGTH.checked) return null;

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

export default LongSentenceTest;
