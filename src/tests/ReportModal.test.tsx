import React from 'react';
import App, { ErrorsContext } from 'components/App';
import { ReportModal } from 'components/type';
import { WritingError } from 'scripts/type';
import { ModalHandler, useModal } from 'hooks/type';
import { fireEvent, render } from '@testing-library/react';

let app: HTMLElement;
let ReportIcon: Element | null;

beforeEach(() => {
	const { container } = render(<App />);
	app = container;
	ReportIcon = app.querySelector('.report.icon--button');
});

describe('Rendering', () => {
	it('render', () => {
		expect(ReportIcon).toBeInTheDocument();
		if (ReportIcon) {
			fireEvent.click(ReportIcon);
			const modal = app.querySelector('.modal--REPORT');
			expect(modal).toBeInTheDocument();
		}
	});

	it('close by icon', () => {
		if (!ReportIcon) return;

		fireEvent.click(ReportIcon);
		const modal = app.querySelector('.modal--REPORT');
		expect(modal).toBeInTheDocument();
		fireEvent.click(ReportIcon);
		expect(modal).not.toBeInTheDocument();
	});

	it('close by other area', () => {
		fireEvent.click(ReportIcon as Element);
		const modal = app.querySelector('.modal--REPORT');
		expect(modal).toBeInTheDocument();
		const editor = app.querySelector('.editor');
		fireEvent.click(editor as Element);
		expect(modal).not.toBeInTheDocument();
	});
});

const ReportModalWithHook = (): JSX.Element => {
	const handler = useModal();
	return <ReportModal handler={handler} />;
};

describe('Modal Content', () => {
	it('', () => {
		const errors = [
			new WritingError({
				name: '에러 타입',
				description: '에러 설명',
				message: '에러 메시지(인포메이션용)',
				location: [1, 3],
				expression: '사용자가 작성한 표현',
			}),
		];

		const { container } = render(
			<ErrorsContext.Provider value={errors}>
				<ReportModalWithHook />
			</ErrorsContext.Provider>
		);

		const modal = container.querySelector('.modal--REPORT');
		expect(modal?.querySelector('h1')).toBeInTheDocument();
		expect(modal?.querySelector('.box--report')).toBeInTheDocument();
		expect(modal?.querySelector('.error--group')).toBeInTheDocument();
	});
});
