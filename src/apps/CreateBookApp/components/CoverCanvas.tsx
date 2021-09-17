import React, { MutableRefObject, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Cover, CoverTitle, CoverAuthor } from 'apps/CreateBookApp';
import { AuthorStyle, TitleStyle } from 'store/book';

interface CoverCanvasProps {
	title: string;
	titleStyle: TitleStyle;
	cover: number;
	author: string;
	authorStyle: AuthorStyle;
	color: string;
}

function CoverCanvas({ title, titleStyle, authorStyle, author, cover, color }: CoverCanvasProps): JSX.Element {
	return (
		<div className="cover-canvas" data-nth={cover}>
			<div className="cover">
				<Cover nth={cover % 8} color={color} />
			</div>
			<CoverTitle cover={cover} title={title} color={titleStyle.color} titleStyle={titleStyle} />
			<CoverAuthor position={titleStyle.position} author={author} authorStyle={authorStyle} />
		</div>
	);
}

export default CoverCanvas;
