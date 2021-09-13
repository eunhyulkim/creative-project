import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toggle from 'apps/WritingApp/components/Toggle';

export default {
	title: 'Form/Toggle',
	component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const False = Template.bind({});
False.args = {
	name: 'toggle',
	checked: false,
};

export const True = Template.bind({});
True.args = {
	name: 'toggle',
	checked: true,
};
