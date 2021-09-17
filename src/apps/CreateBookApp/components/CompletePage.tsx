import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Image, Heading, Paragraph, Button } from 'apps/common';
import { HtmlTempContainer } from 'apps/CreateBookApp';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BookActions, Book } from 'store/book';

const config = {
	error: {
		src: 'create-book-error.png',
		alt: '요가를 하는 사람',
		heading: '이런!',
		paragraph: '책을 만들 수 없습니다.\\n빈 항목으로 제출된 내용이 있습니다.',
		button: '다시 책 만들기',
	},
	success: {
		src: 'create-book-complete.png',
		alt: '하늘을 나는 사람',
		heading: 'Awesome!',
		paragraph: '책을 만들고 있습니다!\\n잠시 후 다운로드가 시작됩니다.',
		button: '새로운 책 만들기',
	},
};

function CompletePage(): JSX.Element {
	const [next, setNext] = useState(false);
	const dispatch = useDispatch();
	const { BookCreate } = BookActions;
	const book = useSelector((state: { book: Book }) => state.book);

	useEffect(() => {
		if (error) {
			document.querySelector('#html-temp-container')?.remove();
			return;
		}
		dispatch(BookCreate());
	}, []);

	if (next) {
		return <Redirect to="/create-book/" />;
	}

	const error = !book.author || !book.title || book.chapters.some((chapter) => !chapter.title || !chapter.body);
	const obj = error ? config.error : config.success;

	return (
		<div className={classNames('complete-page', { 'has-container': !error })}>
			<Image classes="main-logo" src={obj.src} alt={obj.alt} />
			<Heading color="black" size="second">
				{obj.heading}
			</Heading>
			<Paragraph center content={obj.paragraph} />
			{!error && (
				<div className="status" data-complete="false">
					<div className="status-value" data-width="0%" />
				</div>
			)}
			<Button size="large" round="circle" color="black" label={obj.button} onClick={() => setNext(true)} />
			<HtmlTempContainer classes="A5" />
		</div>
	);
}

export default CompletePage;
