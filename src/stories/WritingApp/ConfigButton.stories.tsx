import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ConfigButton from 'apps/WritingApp/components/ConfigButton';
import { useModal } from 'apps/WritingApp/type';

const ConfigButtonWithHook = (): JSX.Element => {
	const handler = useModal();
	return <ConfigButton handler={handler} />;
};

export default {
	title: 'Component/Buttons/ConfigButton',
	component: ConfigButtonWithHook,
} as ComponentMeta<typeof ConfigButtonWithHook>;

const Template: ComponentStory<typeof ConfigButtonWithHook> = (args) => <ConfigButtonWithHook />;

export const Default = Template.bind({});
Default.args = {};
