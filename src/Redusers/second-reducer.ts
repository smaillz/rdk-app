import { handleActions } from 'redux-actions';
import { ReduxState, IActions } from '@models';
import { SecondState } from '@consts';
import * as SecondActions from '@actions/second-actions';

export const secondReducer = handleActions({
    [SecondActions.INCREMENT]: (state: ReduxState.ISecondState, action: IActions<SecondActions.INCREMENT>): ReduxState.ISecondState => ({
        ...state,
        count: state.count + 1
    }),
    [SecondActions.RESET_COUNT]: (state: ReduxState.ISecondState, action: IActions<SecondActions.RESET_COUNT>): ReduxState.ISecondState => ({
        ...state,
        count: 0
    })
}, SecondState.state);
