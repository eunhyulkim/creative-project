import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { AuthorStyle } from 'store/book';

interface CoverAuthorProps {
	author: string;
	authorStyle: AuthorStyle;
	position: string;
}

function CoverAuthor({ author, position, authorStyle }: CoverAuthorProps): JSX.Element {
	return (
		<div style={{ color: authorStyle.color }} className={classNames('cover--author', `author--pos--${position}`)}>
			{author}
		</div>
	);
}

export default CoverAuthor;
