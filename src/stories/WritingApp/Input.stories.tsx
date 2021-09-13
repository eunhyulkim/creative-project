import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from 'apps/WritingApp/components/Input';

export default {
	title: 'Form/Input',
	component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
	name: 'input',
	value: '시험입력',
};
