import React, { RefObject, useEffect, useRef } from 'react';
import classNames from 'classnames';

interface CoverTitleProps {
	classes?: string | string[];
	children?: React.ReactNode;
}

function HtmlTempContainer({ classes, children }: CoverTitleProps): JSX.Element {
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (!ref || !ref.current) return;
		ref.current.style.top = `${window.innerHeight}px`;
	});
	return (
		<div ref={ref} id="html-temp-container" className={classNames(classes)}>
			{children}
		</div>
	);
}

export default HtmlTempContainer;
