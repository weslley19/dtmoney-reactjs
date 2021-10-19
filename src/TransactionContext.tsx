import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction {
  id: number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then((response: any) => {
        setTransactions(response.data.transactions)
      })
  }, []);

  const createTransaction = async (transactionsInput: TransactionInput) => {
    const response: any = await api.post('/transactions', {
      ...transactionsInput,
      createdAt: new Date(),
    });

    const { transaction }: any = response.data;

    setTransactions([
      ...transactions,
      transaction
    ]);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}
