import { combineReducers } from 'redux';
import { userReducer } from './user-reducer';
import { secondReducer } from './second-reducer';

export default combineReducers({
    userState: userReducer,
    secondState: secondReducer
});
