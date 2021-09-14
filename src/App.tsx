import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { WritingApp, HomeApp, CreateBookApp } from './apps/type';

function App(): JSX.Element {
	return (
		<Router basename="/">
			<Switch>
				<Route path="/writer" component={WritingApp} />
				<Route path="/create-book" component={CreateBookApp} />
				<Route path="/" component={HomeApp} />
			</Switch>
		</Router>
	);
}

export default App;
