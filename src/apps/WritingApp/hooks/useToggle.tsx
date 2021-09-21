import React, { RefObject, useRef } from 'react';

export default function useToggle(): [RefObject<HTMLInputElement>, (e: React.FormEvent<HTMLDivElement>) => void] {
	const inputRef = useRef<HTMLInputElement>(null);
	const buttonClickHandler = () => {
		if (inputRef.current) inputRef.current.click();
	};

	return [inputRef, buttonClickHandler];
}
