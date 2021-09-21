import React from 'react';
// import { CONFIG_INITIAL_STATE, isConfigName } from './scripts/Config';
import { CONFIG_INITIAL_STATE, WritingError } from './scripts';
// import WritingError from './scripts/Writ';

// export { WritingError };
// export { CONFIG_INITIAL_STATE, isConfigName };

// export type { Config, ConfigNames, CheckboxType } from './scripts/Config';
// export { default as Result } from './scripts/Result';

// export type { Test } from './scripts/Test';

export type ModalType = 'CONFIG' | 'REPORT' | '';
export interface ModalStateType {
	[key: string]: boolean | string | number | Array<string> | Array<number> | ModalStateType;
}

export type SetStateAction<T> = React.Dispatch<React.SetStateAction<T>>;

export const ConfigContext = React.createContext(CONFIG_INITIAL_STATE);
export const ErrorsContext = React.createContext([] as WritingError[]);

// export { default as useCounter } from './hooks/useCounter';
// export { default as useError } from './hooks/useError';
// export { default as useModal } from './hooks/useModal';
// export { default as useScroll } from './hooks/useScroll';
// export { default as useConfig } from './hooks/useConfig';

// export type { ModalHandler, ModalState } from './hooks/useModal';
