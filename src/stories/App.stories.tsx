import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import App from 'components/App';

export default {
	title: 'Layout/App',
	component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App />;

export const Default = Template.bind({});
Default.args = {};
