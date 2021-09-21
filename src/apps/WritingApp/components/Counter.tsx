import React from 'react';

interface CounterProps {
	count: number;
}

const Counter = React.memo(({ count }: CounterProps): JSX.Element => {
	return <div className="counter">{count}</div>;
});

Counter.displayName = 'Counter';
export default Counter;
