import * as React from 'react';
import * as ReactDom from 'react-dom';
import Modal from './modal';

interface IProps { }
interface IState {
    isModalOpen: boolean;
}

export class ModalButton extends React.PureComponent<IProps, IState> {
    private modalContainer: HTMLElement | null = document.getElementById('modal');
    public state: IState = {
        isModalOpen: false
    };

    public componentDidMount(): void {
        const modalBtn: any = document.querySelector('button.modal_btn');
        modalBtn.addEventListener('keyup', () => console.log('asdasd'));
    }

    public componentWillUnmount(): void {
        const modalBtn: any = document.querySelector('button.modal_btn');
        modalBtn.removeEventListener('keyup', () => console.log('Remove modal listener'));
    }

    private handleCloseModal = ($event: React.MouseEvent | KeyboardEvent): void => this.setState((prevState: IState) => {
        const { isModalOpen } = prevState;
        if ($event instanceof KeyboardEvent) {
            return $event.keyCode === 27 ? { isModalOpen: false } : null;
        }
        return { isModalOpen: !isModalOpen };
    })

    private renderModal(): React.ReactPortal {
        return ReactDom.createPortal((
            <div
                className="modal"
                onClick={this.handleCloseModal}
            >
                <div className="modal_panel">
                    {this.props.children}
                    <button className="modal_btn">Close</button>
                </div>
            </div>
        ), this.modalContainer as Element);
    }

    public render(): JSX.Element {
        const { isModalOpen } = this.state;

        return (
            <>
                <button
                    className="modal_btn"
                    onClick={this.handleCloseModal}
                >
                    Open
                </button>
                {isModalOpen && this.renderModal()}
            </>
        );
    }
}

export default ModalButton;
