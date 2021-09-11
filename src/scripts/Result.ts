import { WritingError } from './type';

interface ResultParameter {
	index?: number;
	count?: number;
}

export default class Result {
	private _errors: WritingError[];

	constructor() {
		this._errors = [];
	}

	public get length(): number {
		return this._errors.length;
	}

	getError(options: ResultParameter = {}): WritingError[] {
		const { index, count } = options;

		if (index !== undefined && index !== -1) {
			return [this._errors[index]];
		}
		if (count !== undefined && count !== -1) {
			return this._errors.slice(-count);
		}
		return this._errors;
	}

	addError(error: WritingError | WritingError[] | null): Result {
		if (!error) return this;

		if (error instanceof Array) {
			this._errors.push(...error);
		} else {
			this._errors.push(error);
		}
		return this;
	}
}
