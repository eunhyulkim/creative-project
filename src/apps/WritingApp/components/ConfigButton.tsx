import React from 'react';
import classNames from 'classnames';
import { AiOutlineSetting } from 'react-icons/ai';
import { ModalType } from 'apps/WritingApp';
import { ModalHandler } from 'apps/WritingApp/hooks';

interface ConfigButtonProps {
	handler: ModalHandler;
}

const ConfigButton = React.memo(({ handler }: ConfigButtonProps): JSX.Element => {
	const modalType: ModalType = 'CONFIG';
	return (
		<div onClick={handler.toggleModal.bind(null, modalType)} className="icon--button">
			<AiOutlineSetting />
		</div>
	);
}, handlerPropsAreEqual);

function handlerPropsAreEqual(prevHandler: ConfigButtonProps, nextHandler: ConfigButtonProps) {
	return prevHandler.handler.modalState === nextHandler.handler.modalState;
}

ConfigButton.displayName = 'ConfigButton';
export default ConfigButton;
