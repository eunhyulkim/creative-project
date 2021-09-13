import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import parse from 'html-react-parser';

interface InformationProps {
	onClick?: () => void;
	content: string;
}

const emptySymbol = (
	<>
		<span>● </span>
		<span>● </span>
		<span>●</span>
	</>
);

const Information = React.memo(({ content = '', ...props }: InformationProps): JSX.Element => {
	return <div className={classNames('information', { empty: !content })}>{content ? parse(content) : emptySymbol}</div>;
});

Information.displayName = 'Information';
export default Information;
