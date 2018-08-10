import {
    resetCount
} from '@actions/second-actions';

export const resetAsyncCount = () => (dispatch: Function, getState: () => any): void => {
    setTimeout(() => {
        dispatch(resetCount());
    }, 2000);
};
