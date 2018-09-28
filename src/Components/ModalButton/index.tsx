import * as React from 'react';
import * as ReactDom from 'react-dom';
import { close } from '@resources/images';
import './styles.scss';

interface IProps {
    isOpen?: boolean | undefined;
    onOpen?: (isOpen: boolean | undefined) => void;
}

interface IState {
    isAutoMode?: boolean;
    isModalOpened?: boolean;
}

export class ModalButton extends React.PureComponent<IProps, IState> {
    private modalContainer: HTMLElement | null = document.getElementById('modal');

    constructor(props: IProps) {
        super(props);

        const notEmptyCustomProps = Object.keys(this.props).length < 2;
        console.log(notEmptyCustomProps, Object.keys(this.props).length);
        this.state = Object.assign({ isAutoMode: notEmptyCustomProps }, notEmptyCustomProps ? { isModalOpened: false } : null);
    }

    public componentDidUpdate(): void {
        const modalBtn: any = document.querySelector('button.modal_btn');
        const isOpen = this.state.isAutoMode ? this.state.isModalOpened : this.props.isOpen;

        if (isOpen) {
            modalBtn.addEventListener('keyup', this.handleCloseModal);
        } else {
            modalBtn.removeEventListener('keyup', this.handleCloseModal);
        }
    }

    private handleCloseModal = ($event: React.MouseEvent | KeyboardEvent): void => {
        $event.stopPropagation();
        const { isAutoMode } = this.state;
        if ($event instanceof KeyboardEvent && $event.keyCode === 27) {
            if (!isAutoMode) {
                this.props.onOpen && this.props.onOpen(this.props.isOpen || false);
            } else {
                this.setState({ isModalOpened: !this.state.isModalOpened });
            }

            return;
        }

        if (!isAutoMode) {
            const { isOpen, onOpen } = this.props;
            onOpen && onOpen(!isOpen);
        } else {
            this.setState({ isModalOpened: !this.state.isModalOpened });
        }
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
        const { isAutoMode } = this.state;
        const isOpen = isAutoMode ? this.state.isModalOpened : this.props.isOpen;

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
