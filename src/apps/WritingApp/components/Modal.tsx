import React from 'react';
import classNames from 'classnames';
import { ModalType } from 'apps/WritingApp';
import { ComponentProps } from 'ui-types';
import { ModalHandler } from 'apps/WritingApp/hooks';

interface ModalProps extends ComponentProps {
	handler: ModalHandler;
	type?: ModalType;
	form?: boolean;
	onblur?: (event: React.FocusEvent<HTMLFormElement> | React.ChangeEvent<HTMLFormElement>) => void;
	onchange?: (event: React.ChangeEvent<HTMLFormElement> | React.FocusEvent<HTMLFormElement>) => void;
}

const Modal = React.memo(
	({ form = false, onblur, onchange, children, handler, type = '' }: ModalProps): JSX.Element => {
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

Modal.displayName = 'Modal';
export default Modal;
