import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { WritingApp, HomeApp } from './apps/type';
import SEO from './SEO';

function App(): JSX.Element {
	return (
		<>
			<SEO />
			<Router>
				<Switch>
					<Route path="/writer" component={WritingApp} />
					<Route path="/" component={HomeApp} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
