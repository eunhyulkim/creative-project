import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';

interface CoverAuthorProps {
	author: string;
	position: string;
}

function CoverAuthor({ author, position }: CoverAuthorProps): JSX.Element {
	const ref = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		const black = document.querySelector('.cover--title')?.classList.contains('black');
		if (!black && ref && ref.current) ref.current.style.color = '#000000';
	});

	return (
		<div ref={ref} className={classNames('cover--author', `author--pos--${position}`)}>
			{author}
		</div>
	);
}

export default CoverAuthor;
