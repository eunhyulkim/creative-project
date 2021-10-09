import React from 'react';
import classNames from 'classnames';
import parse from 'html-react-parser';
import { ComponentProps } from 'ui-types';

interface TextProps extends ComponentProps {
	content?: string;
	multiple?: number;
	innerWrapper?: boolean;
}

const Text = ({ className, content = '', innerWrapper = false, multiple = 0 }: TextProps): JSX.Element => {
	if (innerWrapper) {
		return (
			<div className={classNames('text', className)}>
				<div className="wrapper">{content ? parse(content) : ''}</div>
			</div>
		);
	}

	if (multiple !== 0) {
		const ret = [...Array(3)].map((item, i) => {
			return <div>{parse(content)}</div>;
		});
		return <>ret</>;
	}

	return <div className={classNames('text', className)}>{content ? parse(content) : ''}</div>;
};

export default Text;
