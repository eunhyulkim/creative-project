import React, { useState } from 'react';
import {
	CopyButton,
	ConfigButton,
	Counter,
	Editor,
	Group,
	Header,
	Information,
	ModalAdapter,
	ReportButton,
} from 'components/type';
import { useCounter, useError, useModal, useConfig } from 'hooks/type';
import { CONFIG_INITIAL_STATE, WritingError } from 'scripts/type';
import _ from 'lodash';
import 'stylesheets/app.scss';

export const ConfigContext = React.createContext(CONFIG_INITIAL_STATE);
export const ErrorsContext = React.createContext([] as WritingError[]);

function WritingApp(): JSX.Element {
	const modalHandler = useModal();
	const [count, setCount] = useCounter();
	const [errors, analysis] = useError();
	const [copyable, setCopyable] = useState(false);
	const [config, setConfig] = useConfig(modalHandler);

	const information = _.last(errors)?.toMessage() || '';

	return (
		<div className="WritingApp">
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
	);
}

export default WritingApp;