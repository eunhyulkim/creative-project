import React from 'react';
import classNames from 'classnames';
import parse from 'html-react-parser';

interface TextProps {
	classes?: string[] | string;
	content?: string;
	multiple?: number;
	innerWrapper?: boolean;
}

const Text = ({ classes, content = '', innerWrapper = false, multiple = 0 }: TextProps): JSX.Element => {
	if (innerWrapper) {
		return (
			<div className={classNames('text', classes)}>
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

	return <div className={classNames('text', classes)}>{content ? parse(content) : ''}</div>;
};

export default Text;
