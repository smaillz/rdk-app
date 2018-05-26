import * as React from 'react';
import './styles';
import * as imageSpace from '../resources/img/1.jpg';

class NavBar extends React.PureComponent<any, any> {
    render(): JSX.Element {
        return (
            <nav>
                <div className="nav-header">
                    <h2>Header</h2>
                </div>
                <img src={imageSpace} alt="Girl in a jacket"/>
            </nav>
        );
    }
}

export default NavBar;
