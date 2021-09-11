import React from 'react';
import classNames from 'classnames';

interface DescriptionProps {
	bold?: boolean;
	classes?: string[];
	children: React.ReactNode;
}

const Description = ({ classes, bold, children }: DescriptionProps): JSX.Element => {
	return <p className={classNames('description', 'gray', { bold }, classes)}>{children}</p>;
};

export default Description;
