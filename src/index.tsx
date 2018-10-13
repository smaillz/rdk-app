import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from './store';
import { hot } from 'react-hot-loader';
import { IRouteConfig } from '@models';
import { SwitchRouteWrapper } from './Routes';

import Header from '@containers/Header';
import Footer from '@containers/Footer';
import Home from '@containers/Content/Home';
import Menu from '@containers/Content/Menu';
import About from '@containers/Content/About';
import Contacts from '@containers/Content/Contacts';
import './main.scss';

const routeConf: IRouteConfig[] = [{
    exact: true,
    path: '/',
    component: Home,
    ownProps: { message: ' Home props' }
}, {
    path: '/menu',
    component: Menu
}, {
    path: '/about',
    component: About,
    ownProps: { message: ' About props' }
}, {
    path: '/contacts',
    component: Contacts,
    cov: true,
    redirectTo: '/about'
}];

const Root = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <>
                <Header />
                <SwitchRouteWrapper routes={routeConf} />
                <Footer />
            </>
        </ConnectedRouter>
    </Provider>
);

export default hot(module)(Root);
