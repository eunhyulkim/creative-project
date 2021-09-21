import React from 'react';
import classNames from 'classnames';
import { ColorType } from 'ui-types';

interface RangeProps {
	minVal: number;
	maxVal: number;
	value: number;
	name: string;
	classes?: string[];
}

const Range = React.memo(({ minVal = 0, value, name, maxVal, classes }: RangeProps): JSX.Element => {
	return (
		<div>
			<div className="range-container">
				<input
					className={classNames('range', classes)}
					name={name}
					type="range"
					data-type="range"
					min={minVal}
					max={maxVal}
					value={value}
					readOnly
				/>
				<span className={classNames('primary', 'bold', 'range-cursor')}>{value}</span>
			</div>
			<div className="range-labels">
				<span className="gray">{minVal}</span>
				<span className="gray">{maxVal}</span>
			</div>
		</div>
	);
});
Range.displayName = 'Range';

export default Range;
