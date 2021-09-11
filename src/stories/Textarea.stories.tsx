import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Textarea from 'components/Textarea';

export default {
	title: 'Element/Textarea',
	component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Editor = Template.bind({});
Editor.args = {
	classes: ['editor'],
};
