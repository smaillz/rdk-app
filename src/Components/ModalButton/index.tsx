import * as React from 'react';
import * as ReactDom from 'react-dom';
import './styles.scss';
import { close } from '@resources/images';

interface IProps {
    isOpen: boolean | undefined;
    onOpen: (isOpen: boolean) => void;
}

interface IState { }

export class ModalButton extends React.PureComponent<IProps, IState> {
    private modalContainer: HTMLElement | null = document.getElementById('modal');

    public componentDidUpdate(newProps: IProps): void {
        const modalBtn: any = document.querySelector('button.modal_btn');
        const { isOpen } = this.props;

        if (isOpen) {
            modalBtn.addEventListener('keyup', this.handleCloseModal);
        } else {
            modalBtn.removeEventListener('keyup', this.handleCloseModal);
        }
    }

    private handleCloseModal = ($event: React.MouseEvent | KeyboardEvent): void => {
        $event.stopPropagation();

        const { isOpen } = this.props;

        if ($event instanceof KeyboardEvent && $event.keyCode === 27) {
            this.props.onOpen(false);
            return;
        }

        this.props.onOpen(!isOpen);
    }

    private stopPropagation = (e: React.MouseEvent): void => e.stopPropagation();

    private renderModal(): React.ReactPortal {
        return ReactDom.createPortal((
            <div className="modal" onClick={this.handleCloseModal} >
                <div className="modal_panel" onClick={this.stopPropagation} >
                    <a href="javascript:void(0)" onClick={this.handleCloseModal} >
                        <img className="modal_close-btn" src={close} />
                    </a>
                    <div className="modal_head">
                        <span className="modal_title">modal title</span>
                    </div>
                    {this.props.children}
                </div>
            </div>
        ), this.modalContainer as Element);
    }

    public render(): JSX.Element {
        const { isOpen } = this.props;

        return (
            <>
                <button
                    className="modal_btn"
                    onClick={this.handleCloseModal}
                >
                    Open
                </button>
                {isOpen && this.renderModal()}
            </>
        );
    }
}

export default ModalButton;
