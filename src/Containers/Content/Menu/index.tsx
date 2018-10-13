import * as React from 'react';
import './styles.scss';

interface IProps {
    message?: string;
}
interface IState {}

export class Menu extends React.PureComponent<IProps, IState> {
    public render(): JSX.Element {
        return (
            <main className="rdk-content">
                <h1>Menu component</h1>
                <p>{this.props.message || 'NOT MESSAGE'}</p>
            </main>
        );
    }
}

export default Menu;
