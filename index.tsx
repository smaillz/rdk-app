import * as React from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';
import App from './src';

import { combineReducers, createStore, applyMiddleware, Store } from 'redux';
import { handleActions } from 'redux-actions';
import logger from 'redux-logger';

interface State {
    count: number;
};

const initialTempState: State = { count: 1 };

const tempReducer = handleActions({
    ['INCREMENT']: (state: State, action) => ({
        ...state,
        count: state.count + 1
    }),
}, initialTempState);

const rootReducer = combineReducers({ tempReducer });

let store: Store;

if (process.env.NODE_ENV !== 'production') {
    store = createStore(rootReducer, applyMiddleware(logger));
} else {
    store = createStore(rootReducer);
}

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));