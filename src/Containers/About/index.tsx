import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.scss';

type Props = IStateToProps & IDispatchToProps;

type State = {};

class About extends React.PureComponent<Props, State> {
    public render(): JSX.Element {
        return (
            <>
                <h1>About component</h1>
                <span className="asd">asd</span>
                <Link to="/">Home</Link>
            </>
        );
    }
}

interface IStateToProps {
}

interface IDispatchToProps { }

const mapStateToProps = (state: any, ownProps: any): IStateToProps => {
    return {};
};

const mapDispatchToProps = (dispatch: Function): IDispatchToProps => {
    return {};
};

export default connect<IStateToProps, IDispatchToProps>(mapStateToProps, mapDispatchToProps)(About);
