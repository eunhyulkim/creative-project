import { testParagraphProps, testSentenceProps } from 'apps/WritingApp/scripts';
import Test from '../Test';

const Error = {
	name: '개조식',
	description: '개조식 사용 방법을 일관적으로 정의합니다.',
	message: '지정된 개조식 타입과 맞지 않습니다.',
};
class RevisionTest extends Test {
	constructor() {
		super(Error.name, Error.description, Error.message);
	}

	testParagraph({ paragraph }: testParagraphProps): boolean {
		return true;
	}

	testSentence({ sentence, config }: testSentenceProps): boolean {
		if (sentence.match(/^[!oㅡ~@#%+=]/)) return false;
		if (!sentence.match(/^[*-]/)) return true;

		const methods = Object.entries(config.REVISION.options)
			.filter((option) => option[1])
			.map((option) => option[0]);
		const exp = sentence.replace(/[\s~+^.,;]$/, '');
		const type = sentence.startsWith('-') ? '-' : '*';
		const lastCharCode = (exp.charCodeAt(exp.length - 1) - '가'.charCodeAt(0)) % 28;
		if (lastCharCode === 16) {
			if ((type === '-' && !methods.includes('- 함체')) || (type === '*' && !methods.includes('* 함체'))) return false;
		} else if (exp.charAt(exp.length - 1) === '다') {
			if ((type === '-' && !methods.includes('- 다체')) || (type === '*' && !methods.includes('* 다체'))) return false;
		} else if (exp.charAt(exp.length - 1) === '요') {
			if ((type === '-' && !methods.includes('- 요체')) || (type === '*' && !methods.includes('* 요체'))) return false;
		} else return false;
		return true;
	}
}
export default RevisionTest;
