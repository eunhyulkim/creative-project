import React from 'react';
import { CONFIG_INITIAL_STATE, isConfigName } from './scripts/Config';

import WritingError from './scripts/WritingError';

export { WritingError };
export { CONFIG_INITIAL_STATE, isConfigName };

export { default as Checkbox } from './components/Checkbox';
export { default as ConfigButton } from './components/ConfigButton';
export { default as ConfigItem } from './components/ConfigItem';
export { default as ConfigModal } from './components/ConfigModal';
export { default as CopyButton } from './components/CopyButton';
export { default as Counter } from './components/Counter';
export { default as Description } from './components/Description';
export { default as Editor } from './components/Editor';
export { default as Header } from './components/Header';
export { default as Information } from './components/Information';
export { default as Modal } from './components/Modal';
export { default as ModalAdapter } from './components/ModalAdapter';
export { default as Range } from './components/Range';
export { default as ReportButton } from './components/ReportButton';
export { default as ReportModal } from './components/ReportModal';
export { default as Select } from './components/Select';
export { default as Textarea } from './components/Textarea';
export { default as Toggle } from './components/Toggle';

export type { Config, ConfigNames, CheckboxType } from './scripts/Config';
export { default as Result } from './scripts/Result';

export type { Test } from './scripts/Test';

export type ModalType = 'CONFIG' | 'REPORT' | '';
export interface ModalStateType {
	[key: string]: boolean | string | number | Array<string> | Array<number> | ModalStateType;
}

export type SetStateAction<T> = React.Dispatch<React.SetStateAction<T>>;

export const ConfigContext = React.createContext(CONFIG_INITIAL_STATE);
export const ErrorsContext = React.createContext([] as WritingError[]);

export { default as useCounter } from './hooks/useCounter';
export { default as useError } from './hooks/useError';
export { default as useModal } from './hooks/useModal';
export { default as useScroll } from './hooks/useScroll';
export { default as useConfig } from './hooks/useConfig';

export type { ModalHandler, ModalState } from './hooks/useModal';
