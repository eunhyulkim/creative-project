export { default as Button } from './Button';
export { default as ReportButton } from './ReportButton';
export { default as ConfigButton } from './ConfigButton';
export { default as CopyButton } from './CopyButton';
export { default as ModalAdapter } from './ModalAdapter';
export { default as Counter } from './Counter';
export { default as Editor } from './Editor';
export { default as Group } from './Group';
export { default as Header } from './Header';
export { default as Information } from './Information';
export { default as Textarea } from './Textarea';
export { default as ConfigModal } from './ConfigModal';
export { default as ReportModal } from './ReportModal';
export { default as Modal } from './Modal';
export { default as Heading } from './Heading';
export { default as Description } from './Description';
export { default as ConfigItem } from './ConfigItem';
export { default as Toggle } from './Toggle';
export { default as Range } from './Range';
export { default as Select } from './Select';
export { default as Checkbox } from './Checkbox';
export { default as Input } from './Input';

export type ModalType = 'CONFIG' | 'REPORT' | '';
export interface ModalStateType {
	[key: string]: boolean | string | number | Array<string> | Array<number> | ModalStateType;
}

export type SetStateAction<T> = React.Dispatch<React.SetStateAction<T>>;
