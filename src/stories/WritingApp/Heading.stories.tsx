import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from 'apps/common/components';

export default {
	title: 'Element/Heading',
	component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const First = Template.bind({});
First.args = {
	size: 'first',
	children: 'first size text node',
};

export const Second = Template.bind({});
Second.args = {
	size: 'second',
	children: 'second size text node',
};

export const Third = Template.bind({});
Third.args = {
	size: 'third',
	children: 'third size text node',
};
