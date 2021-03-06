import { useState } from 'react';
import { TransactionProvider } from './hooks/useTransactions';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';

import { GlobalStyle } from './styles/global';

export function App() {
  const [isNewTransactinModalOpen, setIsNewTransactinModalOpen] = useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactinModalOpen(true);
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactinModalOpen(false);
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactinModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionProvider>
  );
}
