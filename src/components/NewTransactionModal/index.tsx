import Modal from 'react-modal';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button onClick={onRequestClose}>Fechar modal</button>
      <h2>Eu sou um modal</h2>
    </Modal>
  );
}
