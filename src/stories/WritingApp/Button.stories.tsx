import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from 'apps/common/components';

export default {
	title: 'Element/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: 'Button',
};

export const Circle = Template.bind({});
Circle.args = {
	label: 'Button',
	round: 'circle',
};

export const Text = Template.bind({});
Text.args = {
	label: 'Button',
	type: 'text',
};

export const Outline = Template.bind({});
Outline.args = {
	label: 'Button',
	type: 'outline',
};
