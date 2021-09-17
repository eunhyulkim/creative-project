import React, { useState } from 'react';
import {
	CopyButton,
	ConfigButton,
	Counter,
	Editor,
	Header,
	Information,
	ModalAdapter,
	ReportButton,
	ConfigContext,
	ErrorsContext,
	useCounter,
	useError,
	useModal,
	useConfig,
} from 'apps/WritingApp/type';
import { Group } from 'apps/common';
import _ from 'lodash';
import 'stylesheets/writing-app.scss';
import Helmet from 'react-helmet';

function WritingApp(): JSX.Element {
	const modalHandler = useModal();
	const [count, setCount] = useCounter();
	const [errors, analysis] = useError();
	const [copyable, setCopyable] = useState(false);
	const [config, setConfig] = useConfig(modalHandler);

	const information = _.last(errors)?.toMessage() || '';

	return (
		<>
			<Helmet>
				<title>테크니컬 라이터: 효과적 글쓰기</title>
				<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js" />
			</Helmet>
			<div className="writing-app">
				<Header type="fixed">
					<strong>테크니컬 라이터</strong>
					<Group classes={['header--section']}>
						<Counter count={count} />
						<ReportButton handler={modalHandler} />
						<ConfigButton handler={modalHandler} />
						<CopyButton onClick={() => setCopyable(true)} />
					</Group>
				</Header>
				<Editor
					onInput={setCount}
					onClick={modalHandler.closeModal}
					callback={analysis}
					copyable={copyable}
					setCopyable={setCopyable}
				/>
				<Information content={information} />
				<ConfigContext.Provider value={config}>
					<ErrorsContext.Provider value={errors}>
						<ModalAdapter handler={modalHandler} />
					</ErrorsContext.Provider>
				</ConfigContext.Provider>
			</div>
		</>
	);
}

export default WritingApp;
