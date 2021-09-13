import React, { useContext } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'apps/HomeApp/type';

interface NavigationProps {
	title: string;
	classes?: string[];
	children?: React.ReactNode;
}

const Navigation = ({ title, classes, children }: NavigationProps): JSX.Element => {
	const theme = useContext(ThemeContext);

	return (
		<div className={classNames('navigation', { dark: theme === 'dark' }, classes)}>
			<Link to="/">
				<div className="navigation--title">{title}</div>
			</Link>
			<div className="navigation--items">{children}</div>
		</div>
	);
};

export default Navigation;
