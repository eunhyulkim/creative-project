import React from 'react';
import classNames from 'classnames';
import { ModalType } from './type';

interface TextareaProps {
	onClick?: (modal: ModalType) => void;
	onInput?: (e: React.FormEvent<HTMLTextAreaElement>) => void;
	onChange?: (e: React.FormEvent<HTMLTextAreaElement>) => void;
	classes?: string[];
}

const Textarea = React.forwardRef(
	(
		{ onClick, onInput, onChange, classes = [] }: TextareaProps,
		ref: React.LegacyRef<HTMLTextAreaElement>
	): JSX.Element => {
		return (
			<textarea
				ref={ref}
				onClick={onClick?.bind(null, '')}
				onInput={onInput}
				onChange={onChange}
				className={classNames(classes)}
				defaultValue={
					'테크니컬 라이터는 글쓰기를 돕는 에디터입니다.\n문예적 글쓰기와 달리, 작성자의 뜻을 분명하고 알기 쉽게 전달하는 것을 목표로 합니다.\n다양한 설정을 통해 더 편리하게 기술 문서를 작성해보세요!'
				}
			/>
		);
	}
);

Textarea.displayName = 'Textarea';
export default Textarea;
