import { WritingError, Result, Config, CONFIG_INITIAL_STATE } from 'apps/WritingApp';
import cases from './test/cases';

function split(text: string): string[][] {
	const getChunks = () => {
		const sep = text.includes('\n\n') ? '\n\n' : '\n';
		return text
			.trim()
			.split(sep)
			.filter((paragraph) => paragraph);
	};

	const splitChunks = (chunks: string[]) => {
		if (chunks.some((chunk) => chunk.includes('\n'))) {
			return chunks.map((chunk) => chunk.split('\n'));
		}
		let paragraphs = chunks.map((chunk) => [chunk]);
		['.', '?', '!', '-', ')', ']'].forEach((sep) => {
			paragraphs = paragraphs.map((paragraph) => {
				const result: string[] = [];
				const re = new RegExp(`[${sep}](?= )`);
				paragraph.forEach((sentences) => {
					const d = sentences.split(re);
					result.push(...d.map((val, idx, arr) => (idx < arr.length - 1 ? `${val}${sep}` : val)));
				});
				return result;
			});
		});
		return paragraphs;
	};

	const filterParagraphs = (paragraphs: string[][]) => {
		return paragraphs
			.map((paragraph) => paragraph.map((sentence) => sentence.trim()).filter((sentence) => sentence))
			.filter((paragraph) => paragraph.length > 0);
	};

	return filterParagraphs(splitChunks(getChunks()));
}

function testAll(paragraphs: string[][], config: Config): Result {
	const result = new Result();
	cases.forEach((testCase) => {
		result.addError(testCase(paragraphs, config));
	});
	result.sort();
	return result;
}

export default function getResult(text: string): Result {
	const localSetting = localStorage.getItem('CONFIG');
	const config = localSetting ? JSON.parse(localSetting) : CONFIG_INITIAL_STATE;
	const paragraphs: string[][] = split(text);
	const result = testAll(paragraphs, config);
	return result;
}
