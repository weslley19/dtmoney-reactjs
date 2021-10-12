import { useState } from 'react';
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

import Modal from 'react-modal';

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactinModalOpen, setIsNewTransactinModalOpen] = useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactinModalOpen(true);
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactinModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModa={handleOpenNewTransactionModal} />
      <Dashboard />

      <Modal
        isOpen={isNewTransactinModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <button onClick={handleCloseNewTransactionModal}>close</button>
        <div>I am a modal</div>
      </Modal>

      <GlobalStyle />
    </>
  );
}
