import React from 'react';
import { ModalHandler } from 'hooks/type';
import { ConfigModal, ReportModal } from './type';

interface ModalAdapterProps {
	handler: ModalHandler;
}

const ModalAdapter = React.memo(({ handler }: ModalAdapterProps): JSX.Element => {
	switch (handler.modalState.name) {
		case 'CONFIG':
			return <ConfigModal handler={handler} />;
		case 'REPORT':
			return <ReportModal handler={handler} />;
		case '':
		default:
			return <></>;
	}
});

export default ModalAdapter;
