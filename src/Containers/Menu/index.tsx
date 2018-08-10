import * as React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

interface IProps {}
interface IState {}

export class Menu extends React.PureComponent<IProps, IState> {
    public render(): JSX.Element {
        return (
            <>
                <h1>Menu component</h1>
                <Link to="/">Go to Home</Link>
            </>
        );
    }
}

export default Menu;
