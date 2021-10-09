import React from 'react';
import classNames from 'classnames';
import { ColorType, ComponentProps } from 'ui-types';

type ButtonType = 'default' | 'text' | 'outline';

interface ButtonProps extends ComponentProps {
	size?: 'small' | 'medium' | 'large';
	round?: 'square' | 'circle';
	color?: ColorType;
	type?: ButtonType;
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
	className,
	children,
	label,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button
			type="button"
			className={classNames(`button--${round} ${size}`, convertColor(type, color), className)}
			{...props}
		>
			{label}
			{children}
		</button>
	);
};

export default Button;
