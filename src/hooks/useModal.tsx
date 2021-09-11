import React, { useState, useCallback } from 'react';
import { ModalType, ModalStateType } from 'components/type';
import { Config } from 'scripts/type';

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

	return { modalState, toggleModal, openModal, closeModal, setModal };
}
