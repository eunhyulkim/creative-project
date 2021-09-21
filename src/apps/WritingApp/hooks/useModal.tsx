import React, { useState, useCallback } from 'react';
import { ModalType, ModalStateType, Config } from 'apps/WritingApp';
import produce from 'immer';
import { CheckboxType } from '../scripts/Config';

export interface ModalState {
	name: ModalType;
	opened: boolean;
	state: ModalStateType;
}

export interface ModalHandler {
	modalState: ModalState;
	openModal: (name: ModalType) => void;
	closeModal: () => void;
	toggleModal: (name: ModalType) => void;
	setModal: React.Dispatch<React.SetStateAction<ModalState>>;
	modify: (name: string, value: ModalStateType, isCheckbox?: boolean) => void;
}

export default function useModal(): ModalHandler {
	const [modalState, setModal] = useState<ModalState>({ name: '', opened: false, state: {} });
	const openModal = (name: ModalType) => {
		setModal({ ...modalState, name, opened: true, state: {} });
	};
	const closeModal = useCallback(() => setModal({ ...modalState, name: '', opened: false, state: {} }), [modalState]);
	const toggleModal = (name: ModalType) => {
		if (name === modalState.name) {
			closeModal();
		} else {
			openModal(name);
		}
	};
	const modify = (name: string, mergeValue: ModalStateType, isCheckbox = false) => {
		setModal((prevModalState) =>
			produce(prevModalState, (state) => {
				if (isCheckbox) {
					const form = (state.state[name] as CheckboxType) || {};
					form.options = { ...form.options, ...(mergeValue as { [key: string]: boolean }) };
					state.state[name] = form as ModalStateType;
				} else {
					state.state[name] = { ...(state.state[name] as ModalStateType), ...mergeValue };
				}
			})
		);
	};

	return { modalState, toggleModal, openModal, closeModal, setModal, modify };
}
