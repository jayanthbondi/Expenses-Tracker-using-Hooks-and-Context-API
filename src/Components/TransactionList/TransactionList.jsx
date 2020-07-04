import React, { useContext } from 'react';
import { Transaction } from '../Transaction/Transaction.jsx';
import { GlobalContext } from '../../Context/GlobalState';
import './TransactionList.scss'

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}
