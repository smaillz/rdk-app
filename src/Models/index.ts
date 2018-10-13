export * from './model_state';
export * from './actions';

export interface IRouteConfig {
    exact?: boolean;
    path: string;
    component: React.ComponentClass;
    ownProps?: any;
    cov?: boolean;
    redirectTo?: string;
}
