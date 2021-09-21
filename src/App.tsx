import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { WritingApp, HomeApp, CreateBookApp, ScenarioApp } from './apps';
import 'stylesheets/ui-kit.scss';

function App(): JSX.Element {
	return (
		<Router basename="/">
			<Switch>
				<Route path="/writer" component={WritingApp} />
				<Route path="/create-book" component={CreateBookApp} />
				<Route path="/scenario" component={ScenarioApp} />
				<Route path="/" component={HomeApp} />
			</Switch>
		</Router>
	);
}

export default App;
