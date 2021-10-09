import React, { useState } from 'react';
import classNames from 'classnames';
import { Heading, Input, Button, RandomIcon } from 'apps/common/components';
import { CoverCanvasContainer } from 'apps/CreateBookApp';
import { useDispatch } from 'react-redux';
import { BookActions } from 'store/book';
import { Redirect } from 'react-router-dom';

function TitlePage(): JSX.Element {
	const [complete, setComplete] = useState(false);
	const { BookTitleSet, BookCoverStyleShuffle } = BookActions;
	const dispatch = useDispatch();

	if (complete) return <Redirect to="/create-book/author" />;

	return (
		<div className="title-page">
			<Heading size="second" color="black">
				제목을 입력하세요
			</Heading>
			<CoverCanvasContainer />
			<div className="icon-container">
				<RandomIcon handler={() => dispatch(BookCoverStyleShuffle())} />
			</div>
			<Input
				maxLength={30}
				onInput={(event) => dispatch(BookTitleSet(event.currentTarget.value))}
				name="title"
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

export default TitlePage;
