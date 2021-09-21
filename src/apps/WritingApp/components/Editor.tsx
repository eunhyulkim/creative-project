import React, { useEffect, useMemo, useRef } from 'react';
import { SetStateAction, ModalType } from 'apps/WritingApp';
import { Textarea } from 'apps/WritingApp/components';
import { useScroll } from 'apps/WritingApp/hooks';

const placeholder =
	'테크니컬 라이터는 글쓰기를 돕는 에디터입니다.\n문예적 글쓰기와 달리, 작성자의 뜻을 분명하고 알기 쉽게 전달하는 것을 목표로 합니다.\n다양한 설정을 통해 더 편리하게 기술 문서를 작성해보세요!';

interface EditorProps {
	onClick: (modal: ModalType) => void;
	onInput?: (e: React.FormEvent<HTMLTextAreaElement>) => void;
	callback?: (text: string) => void;
	copyable?: boolean;
	setCopyable?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Editor = React.memo(
	({ onClick, onInput, callback, copyable = false, setCopyable = undefined, ...props }: EditorProps): JSX.Element => {
		const scroll = useScroll();
		const classes = useMemo(() => ['editor'], []);
		const editor: React.RefObject<HTMLTextAreaElement> = useRef(null);

		useAnalysisEffect(callback, editor);
		useCopyEffect(copyable, setCopyable, editor);

		return (
			<Textarea
				placeholder={placeholder}
				onClick={onClick}
				onInput={onInput}
				onChange={scroll}
				classes={classes}
				ref={editor}
			/>
		);
	}
);

function useAnalysisEffect(
	callback: ((text: string) => void) | undefined,
	editor: React.RefObject<HTMLTextAreaElement>
) {
	useEffect(() => {
		const clearId = setInterval(() => callback && editor.current && callback(editor.current.value), 5000);
		return () => clearInterval(clearId);
	}, []);
}

function useCopyEffect(
	copyable: boolean,
	setCopyable: SetStateAction<boolean> | undefined,
	editor: React.RefObject<HTMLTextAreaElement>
) {
	useEffect(() => {
		if (!copyable || !setCopyable || !editor.current) return;
		editor.current.select();
		document.execCommand('copy');
		editor.current.blur();
		setCopyable(false);
	}, [copyable]);
}

Editor.displayName = 'Editor';
export default Editor;
