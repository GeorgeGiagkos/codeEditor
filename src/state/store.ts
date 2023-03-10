import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';
import { persistMiddleware } from './middlewares/persistMiddleware';

export const store = createStore(
	reducers,
	{},
	applyMiddleware(persistMiddleware, thunk)
);
