import React from 'react';
import classNames from 'classnames';
import { ComponentProps } from 'ui-types';

interface HeaderProps extends ComponentProps {
	type?: 'default' | 'fixed';
}

const Header = ({ color = 'primary', type = 'default', children, classes, ...props }: HeaderProps): JSX.Element => {
	return (
		<div className={classNames(`header--${type}`, color, classes)} {...props}>
			{children}
		</div>
	);
};

export default Header;
