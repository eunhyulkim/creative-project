import React from 'react';
import classNames from 'classnames';

interface GroupProps {
	classes?: string[];
	children?: React.ReactNode;
}

const Group = ({ children, classes, ...props }: GroupProps): JSX.Element => {
	return (
		<div className={classNames(classes)} {...props}>
			{children}
		</div>
	);
};

export default Group;
