import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from 'apps/common';

export default {
	title: 'Form/Select',
	component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
	options: ['option A', 'option B', 'option C'],
	value: 'option A',
	name: 'select',
};
