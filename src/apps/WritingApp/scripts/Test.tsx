import { Config } from './Config';
import WritingError from './WritingError';
import { ConfigNames } from './index';

export interface testParagraphProps {
	paragraph: string[];
	pidx?: number;
	config?: Config;
}

export interface testSentenceProps {
	paragraph?: string[];
	pidx?: number;
	sentence: string;
	sidx?: number;
	config: Config;
}
export abstract class Test {
	name: string;

	symbol: string;

	message: string;

	description: string;

	constructor(symbol: string, name: string, message: string, description: string) {
		this.symbol = symbol;
		this.name = name;
		this.message = message;
		this.description = description;
	}

	run(paragraphs: string[][], config: Config): null | WritingError[] {
		if (!config[this.symbol as ConfigNames].checked) return null;

		const collection: Array<WritingError> = [];
		paragraphs.forEach((paragraph, pidx) => {
			this.runParagraphTest(collection, paragraph, pidx, config);
			this.runSentencesTest(collection, paragraph, pidx, config);
		});

		if (collection.length === 0) return null;
		return collection;
	}

	runParagraphTest(collection: Array<WritingError>, paragraph: string[], pidx: number, config: Config): void {
		if (!this.testParagraph({ paragraph, pidx, config })) {
			collection.push(this.setError([pidx + 1, 0], paragraph[0]));
		}
	}

	// paragraph: string[], pidx: number, sentence: string, sidx: number, config: Config
	runSentencesTest(collection: Array<WritingError>, paragraph: string[], pidx: number, config: Config): void {
		paragraph.forEach((sentence, sidx) => {
			if (!this.testSentence({ paragraph, pidx, sentence, sidx, config })) {
				collection.push(this.setError([pidx + 1, sidx + 1], sentence));
			}
		});
	}

	setError(location: number[], expression: string): WritingError {
		return new WritingError({
			location,
			expression,
			message: this.message,
			name: this.name,
			description: this.description,
		});
	}

	abstract testParagraph(props: testParagraphProps): boolean;

	abstract testSentence(props: testSentenceProps): boolean;
}
