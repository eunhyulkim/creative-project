import React, { useState } from 'react';
import { Link, Route, RouteComponentProps } from 'react-router-dom';
import 'stylesheets/home-app.scss';
import classNames from 'classnames';
import { Universe, Navigation, IssuePage, InfoPage, ThemeToggleIcon } from 'apps/HomeApp/components';
import { ImageCursorHandler } from 'apps/HomeApp/scripts';
import { ThemeContext } from 'apps/HomeApp';

const apps = [
	{
		path: '/#/writer',
		name: `테크니컬 라이팅`,
	},
	{
		path: '/#/create-book',
		name: `책 만들기`,
	},
];

function App({ match }: RouteComponentProps): JSX.Element {
	const [theme, setTheme] = useState('default');
	const onMouseMove = ImageCursorHandler(60);
	const onToggle = () => setTheme(theme === 'default' ? 'dark' : 'default');
	const dark = theme === 'dark';

	return (
		<ThemeContext.Provider value={theme}>
			<div onMouseMove={onMouseMove} className={classNames(['home-app', 'p-8 leading-relaxed', { dark }])}>
				<Navigation title="크리에이티브-프로젝트">
					<Link to="/info">info</Link>
					<Link to="/issue">issue</Link>
					<ThemeToggleIcon handler={onToggle} />
				</Navigation>
				<Route exact path={match.path}>
					<Universe apps={apps} />
					<div className={classNames(['image-cursor', { dark }])}>visit</div>
				</Route>
				<Route path={`${match.path}info`}>
					<InfoPage />
				</Route>
				<Route path={`${match.path}issue`}>
					<IssuePage />
				</Route>
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
