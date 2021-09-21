import _ from 'lodash';
import { WritingError, Test, Config } from 'apps/WritingApp';

const Error = {
	name: '개조식',
	description: '개조식 사용 방법을 일관적으로 정의합니다.',
	message: '지정된 개조식 타입과 맞지 않습니다.',
};

function sentenceTest(paragraph: string[], pidx: number, sentence: string, sidx: number, config: Config): boolean {
	if (sentence.match(/^[!oㅡ~@#%+=]/)) return false;
	if (!sentence.match(/^[*-]/)) return true;

	const methods = Object.entries(config.REVISION.options)
		.filter((option) => option[1])
		.map((option) => option[0]);
	const exp = sentence.replace(/[\s~+^.,;]$/, '');
	const type = sentence.startsWith('-') ? '-' : '*';
	const lastCharCode = (exp.charCodeAt(exp.length - 1) - '가'.charCodeAt(0)) % 28;
	if (lastCharCode === 16) {
		if ((type === '-' && !methods.includes('- 함체')) || (type === '*' && !methods.includes('* 함체'))) return false;
	} else if (exp.charAt(exp.length - 1) === '다') {
		if ((type === '-' && !methods.includes('- 다체')) || (type === '*' && !methods.includes('* 다체'))) return false;
	} else if (exp.charAt(exp.length - 1) === '요') {
		if ((type === '-' && !methods.includes('- 요체')) || (type === '*' && !methods.includes('* 요체'))) return false;
	} else return false;
	return true;
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

const RevisionTest: Test = (paragraphs, config) => {
	if (!config.REVISION.checked) return null;

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

export default RevisionTest;
