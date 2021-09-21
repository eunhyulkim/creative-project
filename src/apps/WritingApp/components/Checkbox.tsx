import React from 'react';
import classNames from 'classnames';
import { ComponentProps } from 'ui-types';

interface CheckboxProps extends ComponentProps {
	options: { [key: string]: boolean };
	name: string;
}

const Checkbox = ({ options, name, classes }: CheckboxProps): JSX.Element => {
	const opts = Object.entries(options);
	return (
		<div className={classNames(name, classes, 'checkbox')}>
			{opts.map(([opt, checked]) => (
				<React.Fragment key={opt}>
					<input
						className="checkbox"
						type="checkbox"
						data-type="checkbox"
						data-name={name}
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
