import { useState, useCallback } from 'react';
import getResult from 'scripts/grammar';
import { WritingError } from 'scripts/type';
import _ from 'lodash';

export default function useError(): [WritingError[], (text: string) => void] {
	const [errors, setErrors] = useState([] as Array<WritingError>);
	const analysis = useCallback((text: string): void => {
		const nextErrors = getResult(text).getError();
		setErrors(nextErrors);
	}, []);
	return [errors, analysis];
}
