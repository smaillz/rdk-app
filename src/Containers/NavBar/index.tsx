import * as React from 'react';
import './styles.scss';
import { hello, text2 } from '@resources/text';
import All from '@resources';

class NavBar extends React.PureComponent<any, any> {
    render(): JSX.Element {
        return (
            <nav>
                <div className="nav-header">
                    <h2>Header</h2>
                    <h2>{All.Text.hello}</h2>
                    <h2>{hello}</h2>
                    <h2>{text2}</h2>
                </div>
            </nav>
        );
    }
}

export default NavBar;
