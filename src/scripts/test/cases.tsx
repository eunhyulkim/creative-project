import WritingError from '../WritingError';
import ForeignWordTest from './ForeignWordTest';
import SentenceLengthTest from './SentenceLengthTest';
import DoubleNegativeTest from './DoubleNegativeTest';
import RevisionTest from './RevisionTest';
import BannedTest from './BannedTest';
import { Test } from '../type';

const cases: Test[] = [ForeignWordTest, SentenceLengthTest, DoubleNegativeTest, BannedTest, RevisionTest];

export default cases;
