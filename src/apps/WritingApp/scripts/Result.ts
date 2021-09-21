import { WritingError } from 'apps/WritingApp/scripts';

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

	getErrors(options: ResultParameter = {}): WritingError[] {
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

	sort(): Result {
		this._errors.sort(
			(error1, error2) =>
				error1.location[0] * 10000 + error1.location[1] - error2.location[0] * 10000 - error2.location[1]
		);
		return this;
	}
}
