import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Counter from 'components/Counter';

export default {
	title: 'Element/Counter',
	component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => <Counter {...args} />;

export const Default = Template.bind({});
Default.args = {
	count: 24,
};
