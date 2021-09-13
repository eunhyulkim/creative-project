import React from 'react';
import classNames from 'classnames';
import { Config, ConfigNames, RangeType, SelectType, CheckboxType, InputType } from 'apps/WritingApp/scripts/Config';
import { Heading, Toggle, Description, Range, Select, Checkbox, Input, ConfigContext } from 'apps/WritingApp/type';

interface ConfigItemProps {
	name: ConfigNames;
}

function getChildrenWithConfig(config: Config, name: ConfigNames): React.ReactNode {
	switch (config[name].type) {
		case 'range': {
			const { minVal, maxVal, value } = config[name] as RangeType;
			return <Range name={name} minVal={minVal} maxVal={maxVal} value={value} />;
		}
		case 'select': {
			const { options, value } = config[name] as SelectType;
			return <Select name={name} options={options} value={value} />;
		}
		case 'checkbox': {
			const { options } = config[name] as CheckboxType;
			return <Checkbox name={name} options={options} />;
		}
		case 'input': {
			const { value } = config[name] as InputType;
			return <Input name={name} value={value} />;
		}
		default:
			return null;
	}
	return null;
}

const ConfigItem = ({ name }: ConfigItemProps): JSX.Element => {
	const config: Config = React.useContext(ConfigContext);
	const { title, description, checked } = config[name];
	const children = getChildrenWithConfig(config, name);
	return (
		<div className={classNames('config-item')}>
			<div className={classNames('config-item--header')}>
				<Heading size="third" color="black">
					{title}
				</Heading>
				<Toggle checked={checked} name={name} classes={['config-item--toggle']} />
			</div>
			{checked && (
				<div className="config-item--body">
					<Description>{description}</Description>
					{children}
				</div>
			)}
		</div>
	);
};

export default ConfigItem;
