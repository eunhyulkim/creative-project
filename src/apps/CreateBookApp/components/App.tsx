import React from 'react';
import Helmet from 'react-helmet';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { HomePage, TitlePage, AuthorPage, ContentPage } from 'apps/CreateBookApp';
import 'stylesheets/create-book-app.scss';

const App = (): JSX.Element => {
	const { url } = useRouteMatch();

	return (
		<>
			<Helmet>
				<title>북 크리에이터: 빠르게 책 만들기</title>
			</Helmet>
			<div className="create-book-app">
				<Switch>
					<Route path={`${url}/title`} component={TitlePage} />
					<Route path={`${url}/author`} component={AuthorPage} />
					<Route path={`${url}/content`} component={ContentPage} />
					<Route path={url} component={HomePage} />
				</Switch>
			</div>
		</>
	);
};

export default App;
