import React from 'react';
import { ModalHandler, isConfigName, ConfigContext, Modal, Description, ConfigItem } from 'apps/WritingApp';
import { Heading } from 'apps/common';

interface ConfigModalProps {
	handler: ModalHandler;
}

const ConfigModal = ({ handler }: ConfigModalProps): JSX.Element => {
	const formHandler = (event: React.ChangeEvent<HTMLFormElement> | React.FocusEvent<HTMLFormElement>) => {
		const type = event.target.getAttribute('data-type');
		const checkboxName = event.target.getAttribute('data-name');
		const { name, value, checked } = event.target;

		switch (type) {
			case 'toggle':
				handler.modify(name, { checked });
				break;
			case 'checkbox':
				handler.modify(checkboxName as string, { [value]: checked }, true);
				break;
			case 'input':
			case 'range':
			case 'select':
			default:
				handler.modify(name, { value });
		}
	};

	const items = Object.entries(React.useContext(ConfigContext));

	return (
		<Modal form onchange={formHandler} onblur={formHandler} handler={handler} type="CONFIG">
			<Heading>설정 변경</Heading>
			<Description bold>세부적인 설정을 변경할 수 있습니다.</Description>
			{items.map((item) => (isConfigName(item[0]) ? <ConfigItem key={item[0]} name={item[0]} /> : null))}
		</Modal>
	);
};

export default ConfigModal;
