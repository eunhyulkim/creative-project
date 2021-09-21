import React from 'react';
import classNames from 'classnames';
import { Cover, CoverTitle, CoverAuthor } from 'apps/CreateBookApp/components';
import { AuthorStyle, TitleStyle, Chapter } from 'store/book';
import { Text } from 'apps/common';

interface BookTableProps {
	chapters: Chapter[];
	pages: number[];
}

function BookTable({ chapters, pages }: BookTableProps): JSX.Element {
	return (
		<div className="book--table">
			<Text classes="book--table--subject" content="차례" />
			{chapters.map((chapter, idx) => {
				const page = String(pages[idx]);
				return (
					<div className="book--table--row">
						<Text classes="title" content={chapter.title} />
						<hr style={{ width: Math.max(400 - (chapter.title.length * 15 + page.length * 10), 10) }} />
						<Text classes="page" content={page} />
					</div>
				);
			})}
		</div>
	);
}

export default BookTable;
