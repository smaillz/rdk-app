import { ReduxState } from '@models';

export const UserState = {
    get state(): ReduxState.IUserState {
        return {
            firstName: 'Yahor',
            secondName: 'Petrov',
            age: new Date(),
            address: 'space'
        };
    }
};

export const SecondState = {
    get state(): ReduxState.ISecondState {
        return {
            count: 0,
            message: 'text'
        };
    }
};
