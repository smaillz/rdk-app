import * as React from 'react';
import * as ReactDom from 'react-dom';

interface IProps { }

interface IState {
    isModalOpen: boolean;
}

export class ModalButton extends React.PureComponent<IProps, IState> {
    private modalContainer: HTMLElement | null = document.getElementById('modal');
    public state: IState = {
        isModalOpen: false
    };

    public componentDidUpdate(): void {
        const modalBtn: any = document.querySelector('button.modal_btn');

        if (this.state.isModalOpen) {
            modalBtn.addEventListener('keyup', this.handleCloseModal);
        } else {
            modalBtn.removeEventListener('keyup', this.handleCloseModal);
        }

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
