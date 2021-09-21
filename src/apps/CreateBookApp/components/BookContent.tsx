import React from 'react';
import { Text } from 'apps/common';

interface BookContentProps {
	page: number;
	title: string;
	body?: string;
}

function BookContent({ page, title, body }: BookContentProps): JSX.Element {
	const space = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	const footer = page % 2 === 0 ? `${title}${space}${String(page)}` : `${String(page)}${space}${title}`;

	return (
		<>
			<Text classes="content--title" content={title} />
			<Text classes="content--body" content={body} innerWrapper />
			<Text classes="content--number" content={footer} />
		</>
	);
}

export default BookContent;
