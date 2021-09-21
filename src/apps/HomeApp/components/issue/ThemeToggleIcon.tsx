import React, { useContext } from 'react';
import { ThemeContext } from 'apps/HomeApp';
import { IoIosMoon, IoMdSunny } from 'react-icons/io';

interface ThemeToggleIconProps {
	handler: () => void;
}

const ThemeToggleIcon = ({ handler }: ThemeToggleIconProps): JSX.Element => {
	const theme = useContext(ThemeContext);

	return theme === 'dark' ? (
		<IoMdSunny className="theme-toggle-icon" onClick={handler} />
	) : (
		<IoIosMoon className="theme-toggle-icon" onClick={handler} />
	);
};

export default ThemeToggleIcon;
