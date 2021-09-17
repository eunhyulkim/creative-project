import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { AuthorStyle } from 'store/book';

interface CoverAuthorProps {
	author: string;
	authorStyle: AuthorStyle;
	position: string;
}

function CoverAuthor({ author, position, authorStyle }: CoverAuthorProps): JSX.Element {
	const ref = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		const black = document.querySelector('.cover--title')?.classList.contains('black');
		if (!black && ref && ref.current) ref.current.classList.add('white');
	}, []);

	return (
		<div
			ref={ref}
			style={{ color: authorStyle.color }}
			className={classNames('cover--author', `author--pos--${position}`)}
		>
			{author}
		</div>
	);
}

export default CoverAuthor;
