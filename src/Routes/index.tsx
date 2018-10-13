import * as React from 'react';
import {
    Route, Switch
    , Redirect
} from 'react-router';
import { IRouteConfig } from '@models';

export interface IRootProps {
    routes: IRouteConfig[];
}

export const SwitchRouteWrapper = ({ routes }: IRootProps): JSX.Element => (
    <Switch>
        {routes.map((routeConfig: IRouteConfig, i: number): JSX.Element => (
            <Route
                key={i}
                exact={routeConfig.exact}
                path={routeConfig.path}
                render={renderRouteComponent(routeConfig)}
            />
        ))}
    </Switch>
);

const renderRouteComponent = (routeConfig: any) => (routeProps: any) => {
    const { component: Component, cov, ownProps, redirectTo, path } = routeConfig;
    const finalProps = Object.assign({}, ownProps, routeProps);

    return !cov && path !== '/contacts'
        ? <Component {...finalProps} />
        : <Redirect to={{ pathname: redirectTo, state: { from: routeProps.location } }} />;
};
