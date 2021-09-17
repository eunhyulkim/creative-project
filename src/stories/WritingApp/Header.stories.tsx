import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames';
import { ColorType } from 'ui-types';
import { useModal, useCounter, Counter, ReportButton, CopyButton, ConfigButton } from 'apps/WritingApp/type';
import { Group } from 'apps/common';

interface HeaderProps {
	color?: ColorType;
	type?: 'default' | 'fixed';
	classes?: string[];
	children?: React.ReactNode;
}

const HeaderWithHook = ({
	color = 'primary',
	type = 'default',
	children,
	classes,
	...props
}: HeaderProps): JSX.Element => {
	const modalHandler = useModal();
	const [count, setCount] = useCounter();
	const [copyable, setCopyable] = useState(false);

	return (
		<div className={classNames(`header--${type}`, color, classes)} {...props}>
			<strong>테크니컬 라이터</strong>
			<Group classes={['header--section']}>
				<Counter count={count} />
				<ReportButton handler={modalHandler} />
				<ConfigButton handler={modalHandler} />
				<CopyButton onClick={() => setCopyable(true)} />
			</Group>
		</div>
	);
};

export default {
	title: 'Layout/Header',
	component: HeaderWithHook,
} as ComponentMeta<typeof HeaderWithHook>;

const Template: ComponentStory<typeof HeaderWithHook> = (args) => <HeaderWithHook {...args} />;

export const Default = Template.bind({});

Default.args = {};
