import React, { useState } from 'react';
import { Image, Heading, Paragraph, Button } from 'apps/common';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BookActions } from 'store/book';

function TermsPage(): JSX.Element {
	const [agreed, setAgreed] = useState(false);
	const onClick = () => setAgreed(true);

	if (agreed) {
		return <Redirect to="/create-book/complete" />;
	}

	return (
		<div className="terms-page">
			<Image classes="main-logo" src="create-book-terms.png" alt="그네를 즐겁게 타는 사람" />
			<Heading color="black" size="second">
				이제 다 왔습니다!
			</Heading>
			<Paragraph
				center
				content="서비스 개선을 위해 표지 정보가 수집됩니다.\n동의하시는 경우 완성 버튼을 눌러주세요.\n본문 내용은 보호되며 수집되지 않습니다."
			/>
			<Button size="large" round="circle" color="black" label="완성하기" onClick={onClick} />
		</div>
	);
}

export default TermsPage;
