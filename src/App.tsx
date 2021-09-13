import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { WritingApp, HomeApp } from './apps/type';

function App(): JSX.Element {
	return (
		<Router basename="/">
			<Switch>
				<Route path="/writer" component={WritingApp} />
				<Route path="/" component={HomeApp} />
			</Switch>
		</Router>
	);
}

export default App;
