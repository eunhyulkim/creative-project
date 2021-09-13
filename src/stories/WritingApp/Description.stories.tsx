import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Description from 'apps/WritingApp/components/Description';

export default {
	title: 'Element/Description',
	component: Description,
} as ComponentMeta<typeof Description>;

const Template: ComponentStory<typeof Description> = (args) => <Description {...args} />;

export const Default = Template.bind({});
Default.args = {
	bold: false,
	children: 'text description node',
};

export const Bold = Template.bind({});
Bold.args = {
	bold: true,
	children: 'text description node',
};
