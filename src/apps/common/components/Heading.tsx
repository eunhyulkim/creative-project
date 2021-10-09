import React from 'react';
import classNames from 'classnames';
import { ComponentProps } from 'ui-types';

interface HeadingProps extends ComponentProps {
	size?: 'first' | 'second' | 'third';
}

const Heading = ({ color = 'primary', className, size = 'first', children }: HeadingProps): JSX.Element => {
	switch (size) {
		case 'third':
			return <h3 className={classNames('heading--third', color, className)}>{children}</h3>;
		case 'second':
			return <h2 className={classNames('heading--second', color, className)}>{children}</h2>;
		case 'first':
		default:
			return <h1 className={classNames('heading--first', color, className)}>{children}</h1>;
	}
};

export default Heading;
