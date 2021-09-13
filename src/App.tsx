import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { WritingApp, HomeApp } from './components/type';

function App(): JSX.Element {
	return (
		<Router>
			<Switch>
				<Route path="/writer" component={WritingApp} />
				<Route path="/" component={HomeApp} />
			</Switch>
		</Router>
	);
}

export default App;
