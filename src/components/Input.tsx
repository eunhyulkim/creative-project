import React from 'react';
import classNames from 'classnames';
import { ColorType } from 'ui-types';

interface InputProps {
	value?: string;
	name: string;
	classes?: string[];
}

const Input = React.memo(({ value, name, classes }: InputProps): JSX.Element => {
	return <input type="text" name={name} className={classNames(classes, 'input')} defaultValue={value} />;
});
Input.displayName = 'Input';

export default Input;
