import React from 'react';
import classNames from 'classnames';
import { ColorType } from 'ui-types';

type ButtonType = 'default' | 'text' | 'outline';

interface ButtonProps {
	size?: 'small' | 'medium' | 'large';
	round?: 'square' | 'circle';
	color?: ColorType;
	type?: ButtonType;
	classes?: string[];
	label: string;
	children?: React.ReactNode;
	onClick?: () => void;
}

function convertColor(type: ButtonType, color: ColorType) {
	switch (type) {
		case 'text':
			return `text ${color}`;
		case 'outline':
			return `outline border-${color}`;
		default:
			return `bg-${color}`;
	}
}

const Button = ({
	size = 'medium',
	round = 'square',
	color = 'primary',
	type = 'default',
	classes,
	children,
	label,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button
			type="button"
			className={classNames(`button--${round} ${size}`, convertColor(type, color), classes)}
			{...props}
		>
			{label}
			{children}
		</button>
	);
};

export default Button;
