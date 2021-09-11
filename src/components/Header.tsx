import React from 'react';
import classNames from 'classnames';
import { ColorType } from 'ui-types';

interface HeaderProps {
	color?: ColorType;
	type?: 'default' | 'fixed';
	classes?: string[];
	children?: React.ReactNode;
}

const Header = ({ color = 'primary', type = 'default', children, classes, ...props }: HeaderProps): JSX.Element => {
	return (
		<div className={classNames(`header--${type}`, color, classes)} {...props}>
			{children}
		</div>
	);
};

export default Header;
