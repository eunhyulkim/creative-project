import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { Heading, Button, Group } from 'apps/common';
import { useDispatch, useSelector } from 'react-redux';
import { BookActions, Book } from 'store/book';
import { Redirect } from 'react-router-dom';

function ContentPage(): JSX.Element {
	const [complete, setComplete] = useState(false);
	const titleRef = useRef<HTMLInputElement | null>(null);
	const bodyRef = useRef<HTMLTextAreaElement | null>(null);

	const { BookChapterAdd } = BookActions;
	const dispatch = useDispatch();
	const chapters = useSelector((state: { book: Book }) => state.book.chapters);

	useEffect(() => {
		if (titleRef && titleRef.current) titleRef.current.focus();
	}, []);

	const update = () => {
		if (!titleRef.current || !bodyRef.current) return;

		const [title, body] = [titleRef.current?.value, bodyRef.current?.value];
		dispatch(BookChapterAdd(title, body.replaceAll('\n', '<br/>')));
		titleRef.current.value = '';
		bodyRef.current.value = '';
	};
	const onNext = () => {
		dispatch(update);
	};
	const onComplete = () => {
		dispatch(update);
		setComplete(true);
	};

	if (complete) return <Redirect to="/create-book/terms" />;

	return (
		<div className="content-page">
			<Heading size="second" color="black">
				{chapters.length + 1}장
			</Heading>
			<input
				type="text"
				ref={titleRef}
				name="content--title"
				maxLength={16}
				className={classNames('input', 'content--title', 'bottom')}
				placeholder="제목을 입력하세요(16자 내)"
			/>
			<textarea
				ref={bodyRef}
				name="content--body"
				className={classNames('textarea', 'bottom')}
				placeholder="본문을 입력하세요"
			/>
			<Group classes="button-group">
				<Button onClick={onNext} classes="next" size="large" round="circle" color="real-white" label="다음" />
				<Button onClick={onComplete} classes="next" size="large" round="circle" color="black" label="완성" />
			</Group>
		</div>
	);
}

export default ContentPage;
