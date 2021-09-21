import { WritingError, Test, Config } from 'apps/WritingApp';

const Error = {
	name: '지정 금지어',
	description: '사용자가 원하는 금지어들을 지정할 수 있습니다.',
	message: '지정 금지어가 포함되어 있습니다.',
};

function sentenceTest(paragraph: string[], pidx: number, sentence: string, sidx: number, config: Config): boolean {
	const bannedWords = config.BANNED.value
		.split(/[,]/)
		.map((word) => word.trim())
		.filter((word) => word);
	return bannedWords.every((bannedWord) => {
		return !sentence.match(new RegExp(bannedWord));
	});
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

const BannedTest: Test = (paragraphs, config) => {
	if (!config.BANNED.checked) return null;

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

export default BannedTest;
