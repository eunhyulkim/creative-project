import React from 'react';
import classNames from 'classnames';

interface ParagraphProps {
	classes?: string[] | string;
	content: string;
	center?: boolean;
}

const Paragraph = ({ classes, content, center = false }: ParagraphProps): JSX.Element => {
	if (!center) {
		return <div className={classNames('paragraph', classes)}>{content}</div>;
	}

	const sentences = content.split('\\n');

	return (
		<div className={classNames('paragraph', classes, { center })}>
			{sentences.map((sentence) => (
				<div key={sentence}>{sentence}</div>
			))}
		</div>
	);
};

export default Paragraph;
