import React from 'react';
import classNames from 'classnames';
import { ColorType } from 'ui-types';

interface HeadingProps {
	color?: ColorType;
	size?: 'first' | 'second' | 'third';
	classes?: string[];
	children: React.ReactNode;
}

const Heading = ({ color = 'primary', classes, size = 'first', children }: HeadingProps): JSX.Element => {
	switch (size) {
		case 'third':
			return <h3 className={classNames('heading--third', color, classes)}>{children}</h3>;
		case 'second':
			return <h2 className={classNames('heading--second', color, classes)}>{children}</h2>;
		case 'first':
		default:
			return <h1 className={classNames('heading--first', color, classes)}>{children}</h1>;
	}
};

export default Heading;
