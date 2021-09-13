interface WritingErrorParams {
	name: string;
	description: string;
	message: string;
	location?: number[];
	expression?: string;
}

export default class WritingError {
	name: string;

	description: string;

	message: string;

	location: number[];

	expression: string;

	constructor({
		name = 'default error',
		description = 'default description',
		message = '',
		location = [-1, -1],
		expression = '',
	}: WritingErrorParams) {
		this.name = name;
		this.description = description;
		this.message = message;
		this.location = location;
		this.expression = expression;
	}

	toMessage(): string {
		const exp = this.expression.length > 20 ? `${this.expression.slice(0, 20)}...` : this.expression;
		return `${this.location[0]}번째 문단의 '${exp}' 표현은 ${this.message}`;
	}

	toKey(): string {
		return `[${this.location.join(',')}]:${this.name}`;
	}
}
