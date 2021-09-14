import React, { useState } from 'react';
import { Image, Heading, Paragraph, Button } from 'apps/common';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { BookActions } from 'store/book';

function HomePage(): JSX.Element {
	const [started, setStarted] = useState(false);
	const dispatch = useDispatch();
	const onClick = () => {
		const { BookReset } = BookActions;
		dispatch(BookReset());
		setStarted(true);
	};

	if (started) {
		return <Redirect to="/create-book/title" />;
	}

	return (
		<div className="home-page">
			<Image classes="main-logo" src="create-book-main.png" alt="책 읽는 사람" />
			<Heading color="black" size="second">
				Create Your Book
			</Heading>
			<Paragraph
				center
				content="굳이 인디자인을 배워야만 할까요?\n복사/붙여넣기만으로 충분합니다.\n빠르게 당신의 책을 만드세요."
			/>
			<Button size="large" round="circle" color="black" label="시작하기" onClick={() => dispatch(onClick)} />
		</div>
	);
}

export default HomePage;
