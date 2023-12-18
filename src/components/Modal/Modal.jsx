import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '56%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const MyModal = ({ modalIsOpen, closeModal, src, tags }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img src={src} alt={tags} width="600" />
    </Modal>
  );
};