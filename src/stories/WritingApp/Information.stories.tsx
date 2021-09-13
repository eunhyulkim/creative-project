import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Information from 'apps/WritingApp/components/Information';

export default {
	title: 'Element/Information',
	component: Information,
} as ComponentMeta<typeof Information>;

const Template: ComponentStory<typeof Information> = (args) => <Information {...args} />;

export const Default = Template.bind({});
Default.args = {
	content: '',
};

export const Content = Template.bind({});
Content.args = {
	content: 'has content',
};
