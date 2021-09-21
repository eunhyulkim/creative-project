import React from 'react';
import classNames from 'classnames';
import { ComponentProps } from 'ui-types';

const Group = ({ children, classes, ...props }: ComponentProps): JSX.Element => {
	return (
		<div className={classNames(classes)} {...props}>
			{children}
		</div>
	);
};

export default Group;
