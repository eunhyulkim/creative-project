import { Config, WritingError } from 'apps/WritingApp/type';

export type Test = (paragraphs: string[][], config: Config) => WritingError | WritingError[] | null;
