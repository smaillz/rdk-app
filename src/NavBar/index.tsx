import * as React from 'react';
import './styles';

class NavBar extends React.PureComponent<any, any> {
    render(): JSX.Element {
        return (
            <nav>
                <div className="nav-header">
                    <h2>Header</h2>
                </div>
            </nav>
        );
    }
}

export default NavBar;
