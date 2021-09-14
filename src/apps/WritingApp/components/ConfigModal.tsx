import React from 'react';
import {
	ModalHandler,
	isConfigName,
	CheckboxType,
	ConfigContext,
	Modal,
	ModalStateType,
	Description,
	ConfigItem,
} from 'apps/WritingApp/type';
import { Heading } from 'apps/common';
import produce from 'immer';
import _ from 'lodash';

interface ConfigModalProps {
	handler: ModalHandler;
}

function solveHandlerFunc(
	handler: ModalHandler,
	classList: Array<string>,
	filterList: Array<string>,
	name: string,
	mergeValue: ModalStateType
) {
	if (_.intersection(classList, filterList).length === 0) return;

	handler.setModal((prevModalState) =>
		produce(prevModalState, (state) => {
			if (filterList.includes('checkbox')) {
				const form = (state.state[name] as CheckboxType) || {};
				form.options = { ...form.options, ...(mergeValue as { [key: string]: boolean }) };
				state.state[name] = form as ModalStateType;
			} else state.state[name] = { ...(state.state[name] as ModalStateType), ...mergeValue };
		})
	);
}

const ConfigModal = ({ handler }: ConfigModalProps): JSX.Element => {
	const onchange = (event: React.ChangeEvent<HTMLFormElement>) => {
		const filterList = Array.from(event.target.classList);
		const solveHandler = solveHandlerFunc.bind(null, handler, filterList);
		const { name, value, checked } = event.target;

		solveHandler(['config-item--toggle'], name, { checked });
		solveHandler(['range', 'select'], name, { value });
		solveHandler(['checkbox'], filterList.filter((r) => r !== 'checkbox')[0], { [value]: checked });
	};

	const onblur = (event: React.FocusEvent<HTMLFormElement>) => {
		const classList = Array.from(event.target.classList);
		if (classList.some((r) => ['input'].includes(r))) {
			handler.setModal((prevModalState) =>
				produce(prevModalState, (state) => {
					const { name, value } = event.target;
					state.state[name] = { ...(state.state[name] as ModalStateType), value };
				})
			);
		}
	};

	const items = Object.entries(React.useContext(ConfigContext));
	return (
		<Modal form onchange={onchange} onblur={onblur} handler={handler} type="CONFIG">
			<Heading>설정 변경</Heading>
			<Description bold>세부적인 설정을 변경할 수 있습니다.</Description>
			{items.map((item) => (isConfigName(item[0]) ? <ConfigItem key={item[0]} name={item[0]} /> : null))}
		</Modal>
	);
};

export default ConfigModal;
