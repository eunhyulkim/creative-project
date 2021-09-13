import React from 'react';

export default function ImageCursorHandler(topLimit: number): (event: React.MouseEvent<HTMLElement>) => void {
	const mobileWidth = 480;
	const handler = (event: React.MouseEvent<HTMLElement>) => {
		const imageCursor: HTMLDivElement | null = document.querySelector('.image-cursor');
		if (!imageCursor) return;
		imageCursor.style.left = `${event.pageX}px`;
		imageCursor.style.top = `${event.pageY}px`;
		if (event.pageY < topLimit) {
			imageCursor.style.visibility = 'hidden';
		} else if (window.innerWidth > mobileWidth) {
			imageCursor.style.visibility = 'visible';
		}
	};

	return handler;
}
