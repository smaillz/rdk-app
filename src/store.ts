import {
    applyMiddleware,
    createStore,
    Store,
    Middleware
} from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './Redusers';

export const history = createBrowserHistory();

const middlewaresList: Middleware[] = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV !== 'production') {
    middlewaresList.push(logger);
}

export const store: Store = createStore(
    connectRouter(history)(rootReducer),
    {},
    composeWithDevTools(applyMiddleware(...middlewaresList))
);
