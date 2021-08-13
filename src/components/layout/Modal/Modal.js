import React from 'react';
import ReactDOM  from 'react-dom';

import { Modal as ModalUI } from 'semantic-ui-react';

const Modal = ({children, title, open=false, onClose}) => {
    const renderModal = () => {
        return (
            <ModalUI centered={false} open={open}>
                <ModalUI.Header>{title}</ModalUI.Header>
                <ModalUI.Content>
                    <ModalUI.Description>
                    {children}
                    <div onClick={() => onClose()}>Close</div>
                    </ModalUI.Description>
                </ModalUI.Content>
            </ModalUI>
        )
    }
    return ReactDOM.createPortal(
        renderModal(),
        document.querySelector('#modal')
    );
};

export default Modal;