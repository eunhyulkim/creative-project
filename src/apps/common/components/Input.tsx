import React, { FormEvent, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { ColorType } from 'ui-types';

interface InputProps {
	value?: string;
	name: string;
	type?: 'default' | 'bottom';
	classes?: string[];
	focus?: boolean;
	center?: boolean;
	maxLength?: number;
	onInput?: (event: FormEvent<HTMLInputElement>) => void;
}

const Input = React.memo(
	({
		value,
		maxLength = 50,
		center = false,
		name,
		onInput,
		type = 'default',
		classes,
		focus = false,
	}: InputProps): JSX.Element => {
		const ref = useRef<HTMLInputElement>(null);

		useEffect(() => {
			if (ref.current) {
				ref.current.focus();
			}
		});

		return (
			<input
				maxLength={maxLength}
				onInput={onInput}
				ref={ref}
				type="text"
				name={name}
				className={classNames(classes, 'input', { bottom: type === 'bottom', center })}
				defaultValue={value}
			/>
		);
	}
);
Input.displayName = 'Input';

export default Input;
