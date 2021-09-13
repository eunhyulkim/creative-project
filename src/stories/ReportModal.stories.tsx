import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReportModal } from 'components/type';
import { useModal } from 'hooks/type';
import { WritingError } from 'scripts/type';
import { ErrorsContext } from 'apps/WritingApp/App';

const ReportModalWithContext = ({ errors }: { errors: WritingError[] }): JSX.Element => {
	const handler = useModal();
	return (
		<ErrorsContext.Provider value={errors}>
			<ReportModal handler={handler} />
		</ErrorsContext.Provider>
	);
};

export default {
	title: 'Component/Modals/ReportModal',
	component: ReportModalWithContext,
} as ComponentMeta<typeof ReportModalWithContext>;

const Template: ComponentStory<typeof ReportModalWithContext> = (args) => <ReportModalWithContext {...args} />;

export const NoneError = Template.bind({});
NoneError.args = {
	errors: [],
};

export const SomeError = Template.bind({});
SomeError.args = {
	errors: [
		new WritingError({
			name: '에러 타입',
			description: '에러 설명',
			message: '에러 메시지(인포메이션용)',
			location: [1, 3],
			expression: '사용자가 작성한 표현',
		}),
	],
};

export const ManyError = Template.bind({});
ManyError.args = {
	errors: [
		new WritingError({
			name: '에러 타입',
			description: '에러 설명',
			message: '에러 메시지(인포메이션용)',
			location: [1, 4],
			expression: '사용자가 작성한 표현',
		}),
		new WritingError({
			name: '에러 타입',
			description: '에러 설명',
			message: '에러 메시지(인포메이션용)',
			location: [1, 5],
			expression: '사용자가 작성한 표현',
		}),

		new WritingError({
			name: '에러 타입',
			description: '에러 설명',
			message: '에러 메시지(인포메이션용)',
			location: [1, 6],
			expression: '사용자가 작성한 표현',
		}),

		new WritingError({
			name: '에러 타입',
			description: '에러 설명',
			message: '에러 메시지(인포메이션용)',
			location: [1, 7],
			expression: '사용자가 작성한 표현',
		}),

		new WritingError({
			name: '에러 타입',
			description: '에러 설명',
			message: '에러 메시지(인포메이션용)',
			location: [1, 8],
			expression: '사용자가 작성한 표현',
		}),

		new WritingError({
			name: '에러 타입',
			description: '에러 설명',
			message: '에러 메시지(인포메이션용)',
			location: [1, 9],
			expression: '사용자가 작성한 표현',
		}),
	],
};
