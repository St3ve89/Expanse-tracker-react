import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header title='Expanse Tracker' />
      <div className='container'>
        <Balance />
      </div>
    </React.Fragment>
  );
}

export default App;
