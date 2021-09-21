import { useState, useCallback } from 'react';
import { WritingError } from 'apps/WritingApp/scripts';
import _ from 'lodash';
import { process } from '../scripts';

export default function useError(): [WritingError[], (text: string) => void] {
	const [errors, setErrors] = useState([] as Array<WritingError>);
	const analysis = useCallback((text: string): void => {
		const nextErrors = process(text).getErrors();
		setErrors(nextErrors);
	}, []);
	return [errors, analysis];
}
