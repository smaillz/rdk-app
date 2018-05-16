import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './src';

import {
    applyMiddleware,
    combineReducers,
    createStore,
    Store
} from 'redux';
import { handleActions } from 'redux-actions';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

/* TODO
    необходимо, в перспективе, добавить либу redux-thunk для ясинхронных экшенов
    пока такой возможности нет(без костылей).
*/

interface IState {
    count: number;
}

const initialTempState: IState = { count: 1 };

const tempReducer = handleActions({
    ['INCREMENT']: (state: IState, action: any): IState => ({
        ...state,
        count: state.count + 1
    })
}, initialTempState);

const rootReducer = combineReducers({ tempReducer });

let store: Store;

if (process.env.NODE_ENV !== 'production') {
    /* TODO
        добавление redux-devtools-extension бъет ошибку в консоль 
        "has no exported member 'GenericStoreEnhancer'", на работу вроде как не влияет
    */
    store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
} else {
    store = createStore(rootReducer);
}

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
