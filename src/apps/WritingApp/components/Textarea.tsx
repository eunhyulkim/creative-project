import React from 'react';
import classNames from 'classnames';
import { ModalType } from 'apps/WritingApp';
import { ComponentProps } from 'ui-types';

interface TextareaProps extends ComponentProps {
	onClick?: (modal: ModalType) => void;
	onInput?: (e: React.FormEvent<HTMLTextAreaElement>) => void;
	onChange?: (e: React.FormEvent<HTMLTextAreaElement>) => void;
	placeholder?: string;
}

const Textarea = React.forwardRef(
	(
		{ onClick, onInput, onChange, placeholder = '', className = [] }: TextareaProps,
		ref: React.LegacyRef<HTMLTextAreaElement>
	): JSX.Element => {
		return (
			<textarea
				ref={ref}
				onClick={onClick?.bind(null, '')}
				onInput={onInput}
				onChange={onChange}
				className={classNames(className, 'p-4')}
				placeholder={placeholder}
			/>
		);
	}
);

Textarea.displayName = 'Textarea';
export default Textarea;
