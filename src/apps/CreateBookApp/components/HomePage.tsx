import React, { useState } from 'react';
import { Image, Heading, Paragraph, Button } from 'apps/common/components';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
			<Image className="main-logo" src="create-book-main.png" alt="책 읽는 사람" />
			<Heading color="black" size="second">
				Create Your Book
			</Heading>
			<Paragraph
				center
				content="복사/붙여넣기만으로 충분합니다.\n빠르게 당신의 책을 만드세요.\n(현재 Desktop만 지원)"
			/>
			<Button size="large" round="circle" color="black" label="시작하기" onClick={() => dispatch(onClick)} />
		</div>
	);
}

export default HomePage;
