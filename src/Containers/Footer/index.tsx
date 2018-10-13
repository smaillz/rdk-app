import * as React from 'react';

interface IProps { }
interface IState { }

export class Footer extends React.PureComponent<IProps, IState> {
    public render(): JSX.Element {
        return (
            <footer className="rdk-footer">
                <h1>Footer component</h1>
            </footer>
        );
    }
}

export default Footer;
