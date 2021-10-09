import React, { useState } from 'react';
import { Heading, Input, Button } from 'apps/common/components';
import { CoverCanvasContainer } from 'apps/CreateBookApp';
import { useDispatch } from 'react-redux';
import { BookActions } from 'store/book';
import { Redirect } from 'react-router-dom';

function AuthorPage(): JSX.Element {
	const [complete, setComplete] = useState(false);
	const { BookAuthorSet } = BookActions;
	const dispatch = useDispatch();

	if (complete) return <Redirect to="/create-book/content" />;

	return (
		<div className="author-page">
			<Heading size="second" color="black">
				저자를 입력하세요
			</Heading>
			<CoverCanvasContainer />
			<Input
				maxLength={10}
				onInput={(event) => dispatch(BookAuthorSet(event.currentTarget.value))}
				name="author"
				type="bottom"
				center
				focus
			/>
			<Button
				onClick={() => setComplete(true)}
				className="next"
				size="large"
				round="circle"
				color="black"
				label="다음"
			/>
		</div>
	);
}

export default AuthorPage;
