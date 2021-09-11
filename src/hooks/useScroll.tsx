import { useState, useCallback } from 'react';

export default function useScroll(): (e: React.FormEvent<HTMLTextAreaElement>) => void {
	return useCallback((e: React.FormEvent<HTMLTextAreaElement>) => {
		const cursorIdx = e.currentTarget.selectionStart;
		const { length } = e.currentTarget.value;
		if (cursorIdx === length) {
			e.currentTarget.scrollTop = e.currentTarget.scrollHeight;
		}
	}, []);
}
