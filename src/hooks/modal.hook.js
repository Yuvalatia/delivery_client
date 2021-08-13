import React, {useState} from 'react';
import { Modal } from '../components/layout';

const useModal = () => {
    const [showMoadl, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState(null);

    const closeModal = () => {
        setModalTitle('');
        setModalContent(null);
        setShowModal(false);
    }

    return[
        showMoadl ? <Modal title={modalTitle} open={true}  onClose={closeModal}>{modalContent}</Modal> : null,
        (title, content) => {
            setModalTitle(title);
            setModalContent(content);
            setShowModal(true);
        },
        closeModal
    ]
}

export default useModal;