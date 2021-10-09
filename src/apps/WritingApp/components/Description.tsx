import React from 'react';
import classNames from 'classnames';
import { ComponentProps } from 'ui-types';

interface DescriptionProps extends ComponentProps {
	bold?: boolean;
}

const Description = ({ className, color = 'gray', bold, children }: DescriptionProps): JSX.Element => {
	return <p className={classNames('description', color, { bold }, className)}>{children}</p>;
};

export default Description;
