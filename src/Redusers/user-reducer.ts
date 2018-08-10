import { handleActions } from 'redux-actions';
import { ReduxState, IActions } from '@models';
import { UserState } from '@consts';

export const userReducer = handleActions({
    ['INCREMENT']: (state: ReduxState.IUserState, action: IActions<any>): ReduxState.IUserState => ({
        ...state,
        firstName: 'Petya'
    }),
    ['RESET']: (state: ReduxState.IUserState, action: IActions<any>): ReduxState.IUserState => ({
        ...UserState.state
    })
}, UserState.state);
