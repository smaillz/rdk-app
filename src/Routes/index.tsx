import * as React from 'react';
import { Route, Switch } from 'react-router';
import { IRouteConfig } from '@models';

interface IProps {
    routes: IRouteConfig[];
    exactInd?: number;
}

const RootRoute = ({ routes, exactInd = 0 }: IProps): JSX.Element => (
    <Switch>
        {
            routes.map((route: IRouteConfig, i: number): JSX.Element => (
                <Route
                    key={i}
                    exact={exactInd === i}
                    path={route.path}
                    component={route.component}
                />
            ))
        }
    </Switch>
);

export default RootRoute;
