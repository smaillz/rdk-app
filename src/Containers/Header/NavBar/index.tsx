import * as React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export class NavBar extends React.PureComponent<any, any> {
    public render(): JSX.Element {
        return (
            <nav className="nav">
                <Link to="/" className="nav_logo" />
                <div className="nav_menu">
                    <Link to="/menu" className="nav_menu_item">Menu</Link>
                    <Link to="/about" className="nav_menu_item">About</Link>
                </div>
            </nav>
        );
    }
}

export default NavBar;
