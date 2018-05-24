import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './src';
import {
    applyMiddleware,
    combineReducers,
    createStore,
    Store,
    Middleware
} from 'redux';
import { handleActions } from 'redux-actions';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

interface IState {
    count: number;
}

const initialTempState: IState = { count: 1 };

const tempReducer = handleActions({

    ['INCREMENT']: (state: IState, action: any): IState => ({
        ...state,
        count: state.count + 1
    }),

    ['RESET']: (state: IState, action: any): IState => ({
        ...state,
        count: 0
    })
}, initialTempState);

const rootReducer = combineReducers({ tempReducer });
const middlewares: Middleware[] = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store: Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

const Root = (): JSX.Element => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
