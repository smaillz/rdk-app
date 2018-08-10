import * as React from 'react';
import './styles.scss';
import { cry_cat } from '@resources/images';
import ModalButton from '../../Components/ModalButton';

interface IProps { }

interface IState {
    isOpen: boolean;
}

class About extends React.PureComponent<IProps, IState> {
    public render(): JSX.Element {
        return (
            <div className="content">
                <ModalButton>
                    <div>Modal</div>
                    <img className="modal_img" src={cry_cat} alt="cat"/>
                </ModalButton>
            </div>
        );
    }
}

export default About;
