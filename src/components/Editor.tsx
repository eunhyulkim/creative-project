import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Textarea, SetStateAction } from 'components/type';
import classNames from 'classnames';
import { useScroll } from 'hooks/type';
import { ModalType } from './type';

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

		useAnalyzeEffect(callback, editor);
		useCopyEffect(copyable, setCopyable, editor);

		return <Textarea onClick={onClick} onInput={onInput} onChange={scroll} classes={classes} ref={editor} />;
	}
);

function useAnalyzeEffect(
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
