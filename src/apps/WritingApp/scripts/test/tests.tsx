import ForeignWordTest from './ForeignWordTest';
import SentenceLengthTest from './SentenceLengthTest';
import DoubleNegativeTest from './DoubleNegativeTest';
import RevisionTest from './RevisionTest';
import BannedTest from './BannedTest';

const tests = [
	new ForeignWordTest(),
	new SentenceLengthTest(),
	new DoubleNegativeTest(),
	new BannedTest(),
	new RevisionTest(),
];

export default tests;
