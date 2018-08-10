import { IActions } from '@models';

export const INCREMENT = 'INCREMENT';
export const RESET_COUNT = 'RESET_COUNT';

export type INCREMENT = {};
export const increment = (): IActions<INCREMENT> => ({
    type: INCREMENT,
    payload: {
    }
});

export type RESET_COUNT = {};
export const resetCount = (): IActions<RESET_COUNT> => ({
    type: RESET_COUNT,
    payload: {
    }
});
