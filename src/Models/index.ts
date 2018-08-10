export * from './model_state';
export * from './actions';

export interface IRouteConfig {
    path: string;
    name: string;
    component: React.ComponentClass;
}
