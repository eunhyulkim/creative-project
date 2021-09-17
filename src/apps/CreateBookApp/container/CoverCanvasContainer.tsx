import React from 'react';
import { CoverCanvas } from 'apps/CreateBookApp';
import { shallowEqual, useSelector } from 'react-redux';
import { Book } from 'store/book';

function CoverCanvasContainer(): JSX.Element {
	const { title, titleStyle, cover, author, authorStyle, color } = useSelector((state: { book: Book }) => ({
		title: state.book.title,
		cover: state.book.cover,
		author: state.book.author,
		color: state.book.color,
		titleStyle: state.book.titleStyle,
		authorStyle: state.book.authorStyle,
	}));
	return (
		<CoverCanvas
			title={title}
			titleStyle={titleStyle}
			author={author}
			authorStyle={authorStyle}
			cover={+cover}
			color={color}
		/>
	);
}

export default CoverCanvasContainer;
