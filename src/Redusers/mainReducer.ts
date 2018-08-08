import { handleActions } from 'redux-actions';

const initialTempState = {
    count: 0
};

export const tempReducer = handleActions({
    ['INCREMENT']: (state: any, action: any): any => ({
        ...state,
        count: state.count + 1
    }),
    ['RESET']: (state: any, action: any): any => ({
        ...state,
        count: 0
    })
}, initialTempState);
