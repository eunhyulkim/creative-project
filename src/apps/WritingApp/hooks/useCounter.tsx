import React, { useState, useCallback } from 'react';

export default function useCounter(): [number, (e: React.FormEvent<HTMLTextAreaElement>) => void] {
	const [count, setCount] = useState(0);
	const updateCount = useCallback((e): void => setCount(e.currentTarget.value.length), []);
	return [count, updateCount];
}
