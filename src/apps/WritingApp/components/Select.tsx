import React from 'react';
import classNames from 'classnames';
import { ColorType } from 'ui-types';

interface SelectProps {
	options: Array<string>;
	value?: string;
	name: string;
	classes?: string[];
	label?: string;
}

const Select = ({ options, label, value, name, classes }: SelectProps): JSX.Element => {
	const content = (
		<select data-type="select" name={name} className={classNames(classes, 'select')} defaultValue={value}>
			{options.map((opt) => (
				<option value={opt} key={opt}>
					{opt}
				</option>
			))}
		</select>
	);
	return label ? (
		<label htmlFor={name}>
			{label}
			{content}
		</label>
	) : (
		content
	);
};

export default Select;
