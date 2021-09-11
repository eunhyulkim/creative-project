import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Range from 'components/Range';

export default {
	title: 'Form/Range',
	component: Range,
} as ComponentMeta<typeof Range>;

const Template: ComponentStory<typeof Range> = (args) => <Range {...args} />;

export const Default = Template.bind({});
Default.args = {
	minVal: 10,
	maxVal: 20,
	value: 15,
	name: 'range',
};
