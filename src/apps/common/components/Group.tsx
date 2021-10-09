import React from 'react';
import classNames from 'classnames';
import { ComponentProps } from 'ui-types';

const Group = ({ children, className, ...props }: ComponentProps): JSX.Element => {
	return (
		<div className={classNames(className)} {...props}>
			{children}
		</div>
	);
};

export default Group;
