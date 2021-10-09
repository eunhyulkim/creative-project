import React, { RefObject, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { ComponentProps } from 'ui-types';

interface CoverTitleProps extends ComponentProps {
	children?: React.ReactNode;
}

function HtmlTempContainer({ className, children }: CoverTitleProps): JSX.Element {
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (!ref || !ref.current) return;
		ref.current.style.top = `${window.innerHeight}px`;
	});
	return (
		<div ref={ref} id="html-temp-container" className={classNames(className)}>
			{children}
		</div>
	);
}

export default HtmlTempContainer;
