import * as React from 'react';
import { connect } from 'react-redux';
import './styles';
import { increment } from '@actions/second-actions';
import { resetAsyncCount } from '@thunk/second-thunk';
import { ReduxState } from '@models';
import NavBar from './NavBar';

interface IProps extends IStateToProps, IDispatchToProps { }
interface IState { }

export class Header extends React.PureComponent<IProps, IState> {

    public render(): JSX.Element {
        return (<NavBar />);
    }
}

interface IStateToProps {
    count: number;
}

interface IDispatchToProps {
    increment: () => void;
    resetAsyncCount: () => void;
}

export const mapStateToProps = (state: ReduxState.State): IStateToProps => {
    const { count } = state.secondState;

    return {
        count
    };
};

export const mapDispatchToProps = (dispatch: Function): IDispatchToProps => {
    return {
        increment: () => dispatch(increment()),
        resetAsyncCount: () => dispatch(resetAsyncCount())
    };
};

export default connect<IStateToProps, IDispatchToProps>(mapStateToProps, mapDispatchToProps)(Header);
