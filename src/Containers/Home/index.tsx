import * as React from 'react';
import './styles.scss';
import { spoke } from '@resources/images';

interface IProps {}
interface IState {}

export class Home extends React.PureComponent<IProps, IState> {
    public render(): JSX.Element {
        return (
            <div className="content">
                <p>Start page applications</p>
                <img src={spoke} alt="Welcome"/>
            </div>
        );
    }
}

export default Home;
