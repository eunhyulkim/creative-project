import { Config, WritingError } from './type';

export type Test = (paragraphs: string[][], config: Config) => WritingError | WritingError[] | null;
