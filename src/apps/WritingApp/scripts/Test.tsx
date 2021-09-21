import { Config, WritingError } from 'apps/WritingApp';

export type Test = (paragraphs: string[][], config: Config) => WritingError | WritingError[] | null;
