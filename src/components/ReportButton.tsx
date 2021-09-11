import React from 'react';
import classNames from 'classnames';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { ModalHandler } from 'hooks/type';
import { ModalType } from './type';

interface ReportButtonProps {
	handler: ModalHandler;
}

const ReportButton = React.memo(({ handler, ...props }: ReportButtonProps): JSX.Element => {
	const modalType: ModalType = 'REPORT';
	return (
		<div
			onClick={handler.toggleModal.bind(null, modalType)}
			className={classNames('icon--button', 'report')}
			{...props}
		>
			<HiOutlineDocumentReport />
		</div>
	);
}, handlerPropsAreEqual);

function handlerPropsAreEqual(prevHandler: ReportButtonProps, nextHandler: ReportButtonProps) {
	return prevHandler.handler.modalState === nextHandler.handler.modalState;
}

ReportButton.displayName = 'ReportButton';
export default ReportButton;
