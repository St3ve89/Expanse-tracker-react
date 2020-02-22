import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header title='Expanse Tracker' />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
      </div>
    </React.Fragment>
  );
}

export default App;
