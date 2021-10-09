import React, { useContext } from 'react';
import { ThemeContext } from 'apps/HomeApp';
import { IoIosMoon, IoMdSunny } from 'react-icons/io';
import classNames from 'classnames';

interface ThemeToggleIconProps {
	handler: () => void;
}

const ThemeToggleIcon = ({ handler }: ThemeToggleIconProps): JSX.Element => {
	const theme = useContext(ThemeContext);

	return theme === 'dark' ? (
		<IoMdSunny className={classNames('theme-toggle-icon', 'ml-2')} onClick={handler} />
	) : (
		<IoIosMoon className={classNames('theme-toggle-icon', 'ml-2')} onClick={handler} />
	);
};

export default ThemeToggleIcon;
