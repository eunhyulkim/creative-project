import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ConfigModal } from 'components/type';
import { useModal } from 'hooks/type';

const ConfigModalWithHook = (): JSX.Element => {
	const handler = useModal();
	return <ConfigModal handler={handler} />;
};

export default {
	title: 'Component/Modals/ConfigModal',
	component: ConfigModalWithHook,
} as ComponentMeta<typeof ConfigModalWithHook>;

const Template: ComponentStory<typeof ConfigModalWithHook> = (args) => <ConfigModalWithHook />;

export const Default = Template.bind({});
Default.args = {};
