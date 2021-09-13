import React from 'react';
import classNames from 'classnames';
import { ColorType } from 'ui-types';

interface CheckboxProps {
	options: { [key: string]: boolean };
	name: string;
	classes?: string[];
}

const Checkbox = ({ options, name, classes }: CheckboxProps): JSX.Element => {
	const opts = Object.entries(options);
	return (
		<div className={classNames(name, classes, 'checkbox')}>
			{opts.map(([opt, checked], idx) => (
				<React.Fragment key={opt}>
					<input
						className={classNames(name, 'checkbox')}
						type="checkbox"
						name={String(opt)}
						value={opt}
						defaultChecked={checked}
					/>
					<label htmlFor={String(opt)}>{opt}</label>
				</React.Fragment>
			))}
		</div>
	);
};

export default Checkbox;
