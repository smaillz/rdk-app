import * as React from 'react';
import './styles.scss';
import ModalButton from '@components/ModalButton';
import { cry_cat } from '@resources/images';

interface IProps {
    message?: string;
}

interface IState {
    isOpenModal?: boolean;
}

class About extends React.PureComponent<IProps, IState> {

    public state: IState = {
        isOpenModal: false
    };

    private handleChangeModal = (isOpen: boolean) => this.setState((prevState: IState) => ({ isOpenModal: isOpen }));

    private closeModal = () => this.setState((prevState: IState) => ({ isOpenModal: !prevState.isOpenModal }));

    public render(): JSX.Element {
        return (
            <main className="rdk-content">
                <h1>About component</h1>
                <ModalButton
                    isOpen={this.state.isOpenModal}
                    onOpen={this.handleChangeModal}
                >
                    <div>Modal</div>
                    <p>{this.props.message || 'NOT MESSAGE'}</p>
                    <img src={cry_cat} />
                    <button onClick={this.closeModal} >Close</button>
                </ModalButton>
            </main>
        );
    }
}

export default About;
