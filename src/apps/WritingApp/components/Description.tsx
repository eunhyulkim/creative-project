import React from 'react';
import classNames from 'classnames';
import { ComponentProps } from 'ui-types';

interface DescriptionProps extends ComponentProps {
	bold?: boolean;
}

const Description = ({ classes, color = 'gray', bold, children }: DescriptionProps): JSX.Element => {
	return <p className={classNames('description', color, { bold }, classes)}>{children}</p>;
};

export default Description;
