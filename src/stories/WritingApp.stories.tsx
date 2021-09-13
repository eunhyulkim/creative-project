import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import WritingApp from 'apps/WritingApp/App';

export default {
	title: 'Layout/WritingApp',
	component: WritingApp,
} as ComponentMeta<typeof WritingApp>;

const Template: ComponentStory<typeof WritingApp> = (args) => <WritingApp />;

export const Default = Template.bind({});
Default.args = {};
