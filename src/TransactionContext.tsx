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

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext<Transaction[]>([]);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then((response: any) => {
        setTransactions(response.data.transactions)
      })
  }, []);

  return (
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  );
}
