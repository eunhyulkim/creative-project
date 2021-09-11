import React from 'react';
import classNames from 'classnames';
import { ColorType } from 'ui-types';

interface SelectProps {
	options: Array<string>;
	value?: string;
	name: string;
	classes?: string[];
}

const Select = ({ options, value, name, classes }: SelectProps): JSX.Element => {
	return (
		<select name={name} className={classNames(classes, 'select')} defaultValue={value}>
			{options.map((opt) => (
				<option value={opt} key={opt}>
					{opt}
				</option>
			))}
		</select>
	);
};

export default Select;
