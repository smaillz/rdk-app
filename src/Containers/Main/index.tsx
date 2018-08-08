import * as React from 'react';
import { connect } from 'react-redux';
import './styles';

import NavBar from '../NavBar';

class App extends React.PureComponent<IProps, IState> {

    public render(): JSX.Element {
        return (
            <>
                <NavBar />
                <div className="container">
                    <h2>{this.props.count}</h2>
                    <input
                        type="button"
                        value={'++'}
                        onClick={this.props.increment}
                    />
                    <input
                        type="button"
                        value={'reset'}
                        onClick={this.props.resetAsyncCount}
                    />
                </div>
            </>
        );
    }
}

type IProps = IStateToProps & IDispatchToProps;
type IState = {};

export interface IStateToProps {
    count: number;
}

export interface IDispatchToProps {
    increment: () => void;
    resetAsyncCount: () => void;
}

const mapStateToProps = (state: any): IStateToProps => {
    const { tempReducer }: any = state;

    return {
        ...tempReducer
    };
};

const increment = () => {
    return { type: 'INCREMENT' };
};

const resetCount = () => {
    return { type: 'RESET' };
};

const resetAsyncCount = () => (dispatch: Function, getState: Function): void => {
    setTimeout(() => {
        dispatch(resetCount());
    }, 2000);
};

const mapDispatchToProps = (dispatch: Function): IDispatchToProps => {
    return {
        increment: () => dispatch(increment()),
        resetAsyncCount: () => dispatch(resetAsyncCount())
    };
};

export default connect<IStateToProps, IDispatchToProps>(mapStateToProps, mapDispatchToProps)(App);
