import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
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

import createBrowserHistory from 'history/createBrowserHistory';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';

import Home from './src/Home';
import About from './src/About';

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

const history = createBrowserHistory();

const rootReducer = combineReducers({ tempReducer });

const middlewaresList: Middleware[] = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV !== 'production') {
    middlewaresList.push(logger);
}

// const store: Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewaresList)));
// tslint:disable-next-line:max-line-length
const store: Store = createStore(connectRouter(history)(rootReducer), {}, composeWithDevTools(applyMiddleware(...middlewaresList)));

// const Root = () => (
//     <Provider store={store}>
//         <App />
//     </Provider>
// );

const Root2 = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact={true} path="/"  component={Home}/>
                <Route  path="/about"  component={About}/>
            </Switch>
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(<Root2/>, document.getElementById('root'));
