import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { api } from '../../services/api';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [type, setType] = useState('deposit');
  const [category, setCategory] = useState('');

  const handleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault();

    const data = {
      title,
      value,
      type,
      category
    };

    api.post('/transactions', data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <button type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeImg} alt="Fechar modal" />
        </button>

        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="number" placeholder="Valor" value={value} onChange={(e) => setValue(Number(e.target.value))} />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            isActiveColor='green'
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            isActiveColor='red'
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" value={category} onChange={(e) => setCategory(e.target.value)} />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
