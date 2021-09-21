// import { Config, WritingError, WritingError, Test, Config } from 'apps/WritingApp';
import { Config, WritingError, ConfigNames } from '.';
// export type Test = (paragraphs: string[][], config: Config) => WritingError | WritingError[] | null;

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
export default abstract class Test {
	name: string;

	message: string;

	description: string;

	constructor(name: string, message: string, description: string) {
		this.name = name;
		this.message = message;
		this.description = description;
	}

	run(paragraphs: string[][], config: Config): null | WritingError[] {
		if (!config[this.name as ConfigNames].checked) return null;

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
