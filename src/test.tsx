import * as React from 'react';
import { connect } from 'react-redux';
import './styles';
import { text } from './temp';

class Test extends React.PureComponent<IProps, IState> {

    public render(): JSX.Element {
        return (
            <React.Fragment>
                <div className="container">
                    {text} dadada
                    <h2>{this.props.count}</h2>
                    <input
                        type="button"
                        value={'++'}
                        onClick={this.props.increment}
                    />
                    <br />
                    <input
                        type="button"
                        value={'Reset'}
                        onClick={this.props.resetCount}
                    />
                </div>
            </React.Fragment>
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
    resetCount: () => void;
}

const mapStateToProps = ({ tempReducer }: any): IStateToProps => {
    return {
        ...tempReducer
    };
};

const increment = () => {
    return { type: 'INCREMENT' };
};

const resetCount = () => ({
    type: 'RESET'
});

const decrement = () => (dispatch: Function, getState: Function) => {
    setTimeout(() => {
        dispatch(resetCount());
    }, 1000);
};

const mapDispatchToProps = (dispatch: Function): IDispatchToProps => {
    return {
        increment: () => dispatch(increment()),
        resetCount: () => dispatch(decrement())

    };
};

export default connect<IStateToProps, IDispatchToProps>(mapStateToProps, mapDispatchToProps)(Test);
