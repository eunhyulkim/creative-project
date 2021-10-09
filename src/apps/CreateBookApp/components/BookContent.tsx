import React from 'react';
import { Text } from 'apps/common/components';

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
			<Text className="content--title" content={title} />
			<Text className="content--body" content={body} innerWrapper />
			<Text className="content--number" content={footer} />
		</>
	);
}

export default BookContent;
