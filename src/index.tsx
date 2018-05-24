import * as React from 'react';
import { hot } from 'react-hot-loader';
import './styles';

// import Test from './test';
import NavBar from './NavBar';

type IProps = {};
type IState = {};
class App extends React.PureComponent<IProps, IState> {

    public render(): JSX.Element {
        return (
            <React.Fragment>
                <NavBar />
                {/* <Test /> */}
            </React.Fragment>
        );
    }
}

export default hot(module)(App);
