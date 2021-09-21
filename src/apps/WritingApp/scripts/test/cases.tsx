import { Test } from 'apps/WritingApp';
import ForeignWordTest from './ForeignWordTest';
import SentenceLengthTest from './SentenceLengthTest';
import DoubleNegativeTest from './DoubleNegativeTest';
import RevisionTest from './RevisionTest';
import BannedTest from './BannedTest';

const cases: Test[] = [ForeignWordTest, SentenceLengthTest, DoubleNegativeTest, BannedTest, RevisionTest];

export default cases;
