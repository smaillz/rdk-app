import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

type Props = IStateToProps & IDispatchToProps;

type State = {};

class About extends React.PureComponent<Props, State> {
    public render(): JSX.Element {
        return (
            <>
                <h1>About component</h1>
                <Link to="/">Home</Link>
            </>
        );
    }
}

interface IStateToProps { 
    // goBack: () => void;
}

interface IDispatchToProps { }

const mapStateToProps = (state: any, ownProps: any): IStateToProps => {
    // console.log('About', state, ownProps);
    return {
        // goBack: ownProps.history.goBack
    };
};

const mapDispatchToProps = (dispatch: Function): IDispatchToProps => {
    return {};
};

export default connect<IStateToProps, IDispatchToProps>(mapStateToProps, mapDispatchToProps)(About);
