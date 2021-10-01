import { testParagraphProps, testSentenceProps } from 'apps/WritingApp/scripts';
import Test from '../Test';

const Error = {
	symbol: 'BANNED',
	name: '지정 금지어',
	description: '사용자가 원하는 금지어들을 지정할 수 있습니다.',
	message: '지정 금지어가 포함되어 있습니다.',
};

class BannedTest extends Test {
	constructor() {
		super(Error.symbol, Error.name, Error.description, Error.message);
	}

	testParagraph({ paragraph }: testParagraphProps): boolean {
		return true;
	}

	testSentence({ sentence, config }: testSentenceProps): boolean {
		const bannedWords = config.BANNED.value
			.split(/[,]/)
			.map((word) => word.trim())
			.filter((word) => word);
		return bannedWords.every((bannedWord) => {
			return !sentence.match(new RegExp(bannedWord));
		});
	}
}
export default BannedTest;
