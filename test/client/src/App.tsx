import React from 'react';
import { Products } from './Pages';
import { Header } from './components';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Header/>
      <Products/>
    </div>
  );
}

export default App;
