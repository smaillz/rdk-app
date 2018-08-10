export namespace ReduxState {

    export type State = {
        userState: IUserState,
        secondState: ISecondState
    };

    export interface IUserState {
        firstName: string;
        secondName: string;
        age: string | Date;
        address: string;
    }

    export interface ISecondState {
        count: number;
        message: string;
    }
}
