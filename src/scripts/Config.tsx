type FormType = 'range' | 'select' | 'checkbox' | 'input' | null;
type Set = { checked: boolean; type: FormType; title: string; description?: string };
export type RangeType = Set & { minVal: number; maxVal: number; value: number };
export type SelectType = Set & { options: Array<string>; value: string };
export type CheckboxType = Set & { options: { [key: string]: boolean } };
export type InputType = Set & { value: string };
export type NoneType = Set & { type: null };

export type Config = {
	SENTENCE_LENGTH: RangeType;
	FOREIGN_WORD: NoneType;
	DOUBLE_NEGATIVE: NoneType;
	BANNED: InputType;
	REVISION: CheckboxType;
};

export const CONFIG_INITIAL_STATE: Config = {
	FOREIGN_WORD: {
		checked: true,
		type: null,
		title: '외래어',
		description: '기술용어의 외래어 표기를 준수합니다.',
	},
	SENTENCE_LENGTH: {
		checked: true,
		type: 'range',
		title: '문장 길이 제한',
		description: '한 문장의 최대 글자 수를 제한합니다.',
		minVal: 30,
		maxVal: 200,
		value: 50,
	},
	DOUBLE_NEGATIVE: {
		checked: true,
		type: null,
		title: '이중부정',
		description: '이중부정의 사용을 제한합니다.',
	},
	BANNED: {
		checked: false,
		type: 'input',
		title: '지정 금지어',
		description: '원하는 금지 단어들을 쉼표로 구분해 지정합니다.',
		value: '',
	},
	REVISION: {
		checked: false,
		type: 'checkbox',
		title: '개조식',
		description: '개조식 사용 형식을 정의합니다.',
		options: {
			'- 함체': false,
			'- 다체': false,
			'- 요체': false,
			'* 함체': false,
			'* 다체': false,
			'* 요체': false,
		},
	},
};

const CONFIG_NAMES = ['FOREIGN_WORD', 'SENTENCE_LENGTH', 'DOUBLE_NEGATIVE', 'BANNED', 'REVISION'] as const;
export type ConfigNames = typeof CONFIG_NAMES[number];
export function isConfigName(str: unknown): str is ConfigNames {
	return typeof str === 'string' && CONFIG_NAMES.includes(str as ConfigNames);
}
