import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { ComponentProps } from 'ui-types';
import { useToggle } from '../hooks';

interface ToggleProps extends ComponentProps {
	name: string;
	checked?: boolean;
}

const Toggle = ({ name, checked = false, color = 'primary', classes }: ToggleProps): JSX.Element => {
	const [ref, onclick] = useToggle();
	return (
		<label htmlFor={name} className="toggle--label" data-checked={checked}>
			{!checked || <span>ON</span>}
			<input
				data-type="toggle"
				ref={ref}
				type="checkbox"
				name={name}
				checked={checked}
				className={classNames(classes)}
				readOnly
			/>
			<div onClick={onclick} className={classNames('toggle--button', classes)} />
			{checked || <span>OFF</span>}
		</label>
	);
};

export default Toggle;
