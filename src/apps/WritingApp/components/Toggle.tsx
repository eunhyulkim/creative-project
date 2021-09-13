import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { ColorType } from 'ui-types';

interface ToggleProps {
	name: string;
	color?: ColorType;
	classes?: string[];
	checked?: boolean;
}

const Toggle = ({ name, checked = false, color = 'primary', classes }: ToggleProps): JSX.Element => {
	const ref = useRef<HTMLInputElement>(null);
	const onclick = () => {
		if (ref.current) ref.current.click();
	};
	return (
		<label htmlFor={name} className="toggle--label" data-checked={checked}>
			{!checked || <span>ON</span>}
			<input ref={ref} type="checkbox" name={name} checked={checked} className={classNames(classes)} readOnly />
			<div onClick={onclick} className={classNames('toggle--button', classes)} />
			{checked || <span>OFF</span>}
		</label>
	);
};

export default Toggle;
