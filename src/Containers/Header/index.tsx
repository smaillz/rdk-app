import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import * as classNames from 'classnames';
import './styles';

interface IProps extends RouteComponentProps { }
interface IState { }

interface IHeaderLink {
    path: string;
    name: string;
}

export class Header extends React.PureComponent<IProps, IState> {

    private links: IHeaderLink[] = [{
        path: '/menu',
        name: 'Menu'
    }, {
        path: '/about',
        name: 'About'
    }, {
        path: '/contacts',
        name: 'Contacts'
    }];

    private renderLink = ({ path, name }: IHeaderLink, i: number): JSX.Element => {
        const linkClasses = classNames('link_item', { 'active-link': this.props.location.pathname === path });
        return (
            <li key={i} className={linkClasses} >
                <Link to={path}>{name}</Link>
            </li>
        );
    }

    public render(): JSX.Element {
        return (
            <header className="rdk-head">
                <Link className="app_logo" to="/" />
                <ul className="link_list">
                    {this.links.map(this.renderLink)}
                </ul>
            </header>
        );
    }
}

export default withRouter(Header);
