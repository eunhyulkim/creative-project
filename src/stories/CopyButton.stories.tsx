import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CopyButton from 'components/CopyButton';
import { useModal } from 'hooks/type';

const CopyButtonWithHook = (): JSX.Element => {
	const handler = useModal();
	const [copyable, setCopyable] = useState(false);
	return <CopyButton onClick={() => setCopyable(true)} />;
};

export default {
	title: 'Component/Buttons/CopyButton',
	component: CopyButtonWithHook,
} as ComponentMeta<typeof CopyButtonWithHook>;

const Template: ComponentStory<typeof CopyButtonWithHook> = (args) => <CopyButtonWithHook />;

export const Default = Template.bind({});
Default.args = {};
