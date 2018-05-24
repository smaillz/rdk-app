import * as React from 'react';
import './styles';

type IProps = {};
interface IState { }

class NavBar extends React.PureComponent<IProps, IState> {
    render(): JSX.Element {
        return (
            <React.Fragment>
                <header>
                    <div className="header">
                        <h3>Header</h3>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default NavBar;
