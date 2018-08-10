import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from './store';
import { hot } from 'react-hot-loader';
import Home from './Containers/Home';
import About from './Containers/About';
import Header from './Containers/Header';
import Menu from './Containers/Menu';
import { IRouteConfig } from '@models';
import RootRoute from './Routes';
import './main.scss';

const routeConf: IRouteConfig[] = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/about',
    name: 'About',
    component: About
}, {
    path: '/menu',
    name: 'Menu',
    component: Menu
}];

const Root = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <>
                <Header/>
                <RootRoute routes={routeConf} />
            </>
        </ConnectedRouter>
    </Provider>
);

export default hot(module)(Root);
