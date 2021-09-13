import React from 'react';
import classNames from 'classnames';
import { ModalType, ModalHandler } from 'apps/WritingApp/type';

interface ModalProps {
	handler: ModalHandler;
	type?: ModalType;
	children: React.ReactNode;
	form?: boolean;
	onblur?: (event: React.FocusEvent<HTMLFormElement>) => void;
	onchange?: (event: React.ChangeEvent<HTMLFormElement>) => void;
}

const Modal = React.memo(
	({ form = false, onblur, onchange, handler, children, type = '' }: ModalProps): JSX.Element => {
		if (form) {
			return (
				<form
					id={`form--${type.toLowerCase()}`}
					className={classNames(`modal--${type.toLowerCase()}`, 'black')}
					onBlur={onblur}
					onChange={onchange}
				>
					{children}
				</form>
			);
		}
		return <div className={classNames(`modal--${type}`, 'black')}>{children}</div>;
	},
	(prev, next) => prev.handler.modalState.name === 'REPORT' && next.handler.modalState.name === 'REPORT'
);

export default Modal;
