import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import {
    store,
    history
} from './store';
import { hot } from 'react-hot-loader';
import Home from './Containers/Home';
import About from './Containers/About';
import App from './Containers/Main';

const Root = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <>
                <App/>
                <Switch>
                    <Route exact={true} path="/"  component={Home}/>
                    <Route  path="/about"  component={About}/>
                </Switch>
            </>
        </ConnectedRouter>
    </Provider>
);

export default hot(module)(Root);
