import * as React from 'react';

interface IProps { }
interface IState { }

export class Contacts extends React.PureComponent<IProps, IState> {

    public render(): JSX.Element {
        return (
            <main className="rdk-content">
                <h1>Contacts component</h1>
            </main>
        );
    }
}

export default Contacts;
