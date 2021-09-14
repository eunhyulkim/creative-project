import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import book from './book';

const reducers = combineReducers({
	book,
});

const configure = () => {
	const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, logger)));
	return store;
};

export default configure();
