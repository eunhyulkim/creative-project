import { useState, useCallback } from 'react';
import getResult from 'apps/WritingApp/scripts/grammar';
import { WritingError } from 'apps/WritingApp/type';
import _ from 'lodash';

export default function useError(): [WritingError[], (text: string) => void] {
	const [errors, setErrors] = useState([] as Array<WritingError>);
	const analysis = useCallback((text: string): void => {
		const nextErrors = getResult(text).getError();
		setErrors(nextErrors);
	}, []);
	return [errors, analysis];
}
