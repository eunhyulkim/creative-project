import React from 'react';
import _ from 'lodash';
import 'stylesheets/scenario-app.scss';
import Helmet from 'react-helmet';

function WritingApp(): JSX.Element {
	return (
		<>
			<Helmet>
				<title>시나리오 라이터: 뮤즈와 글쓰기</title>
			</Helmet>
			<div className="scenario-app" />
		</>
	);
}

export default WritingApp;
