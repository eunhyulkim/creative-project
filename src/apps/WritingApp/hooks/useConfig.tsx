import React, { useState, useEffect } from 'react';
import { SetStateAction, Config, CONFIG_INITIAL_STATE, ModalHandler } from 'apps/WritingApp/type';

import produce from 'immer';
import _ from 'lodash';

export default function useConfig(modalHandler: ModalHandler): [Config, SetStateAction<Config>] {
	const localConfig: Config | {} = JSON.parse(localStorage.getItem('CONFIG') || '{}');
	const [config, setConfig] = useState(_.isEmpty(localConfig) ? CONFIG_INITIAL_STATE : localConfig);
	const { name, state: change } = modalHandler.modalState;

	useEffect(() => {
		if (name !== 'CONFIG') return;

		setConfig(
			produce(config, (prevConfig) => {
				_.merge(prevConfig, change);
			})
		);
	}, [modalHandler.modalState.state]);

	useEffect(() => localStorage.setItem('CONFIG', JSON.stringify(config)), [config]);

	return [config as Config, setConfig];
}
