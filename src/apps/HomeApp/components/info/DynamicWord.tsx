import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { ThemeContext } from 'apps/HomeApp/type';

interface DynamicWordProps {
	classes?: string[];
	values: string[];
}

const DynamicWord = ({ classes, values }: DynamicWordProps): JSX.Element => {
	const theme = useContext(ThemeContext);
	const dark = theme === 'dark';
	const [wordIdx, setWordIdx] = useState(0);
	useEffect(() => {
		const clearId = setInterval(() => {
			if (wordIdx + 1 === values.length) setWordIdx(0);
			else setWordIdx(wordIdx + 1);
		}, 2000);
		return () => clearInterval(clearId);
	});

	return <span className={classNames('dynamic-word', classes, { dark })}>{values[wordIdx]}</span>;
};

export default DynamicWord;
