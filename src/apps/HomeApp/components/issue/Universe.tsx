import React, { useContext } from 'react';
import classNames from 'classnames';
import { Planet } from 'apps/HomeApp/components';
import { ThemeContext } from 'apps/HomeApp';

interface UniverseProps {
	apps: Array<{ path: string; name: string }>;
	classes?: string[];
	children?: React.ReactNode;
}

const Universe = ({ apps, classes, children }: UniverseProps): JSX.Element => {
	const theme: string = useContext(ThemeContext);

	return (
		<div className={classNames(['universe', { dark: theme === 'dark' }, classes])}>
			{apps.map((app) => (
				<Planet key={app.name} app={app} />
			))}
			{children}
		</div>
	);
};

export default Universe;
