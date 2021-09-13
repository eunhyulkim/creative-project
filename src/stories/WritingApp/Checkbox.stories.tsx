import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from 'apps/WritingApp/components/Checkbox';

export default {
	title: 'Form/Checkbox',
	component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
	options: {
		'option A': true,
		'option B': false,
		'option C': true,
	},
	name: 'option',
};
