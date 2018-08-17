import * as React from 'react';
import './styles.scss';
import ModalButton from '@components/ModalButton';

interface IProps { }

interface IState {
    isOpenModal?: boolean;
}

class About extends React.PureComponent<IProps, IState> {

    public state: IState = {
        isOpenModal: false
    };

    private handleChangeModal = (isOpen: boolean) => {
        this.setState((prevState: IState) => ({ isOpenModal: isOpen }));
    }

    private closeModal = () => this.setState((prevState: IState) => ({ isOpenModal: !prevState.isOpenModal }));

    public render(): JSX.Element {
        return (
            <div className="content">
                <ModalButton
                    isOpen={this.state.isOpenModal}
                    onOpen={this.handleChangeModal}
                >
                    <div>Modal</div>
                    <img src="https://www.html5rocks.com/static/images/tutorials/easy-hidpi/chrome1x.png"/>
                    <button onClick={this.closeModal} >
                        close
                    </button>
                </ModalButton>
            </div>
        );
    }
}

export default About;
