import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReportButton, useModal } from 'apps/WritingApp';

const ReportButtonWithHook = (): JSX.Element => {
	const handler = useModal();
	return <ReportButton handler={handler} />;
};

export default {
	title: 'Component/Buttons/ReportButton',
	component: ReportButtonWithHook,
} as ComponentMeta<typeof ReportButtonWithHook>;

const Template: ComponentStory<typeof ReportButtonWithHook> = (args) => <ReportButtonWithHook />;

export const Default = Template.bind({});
Default.args = {};
