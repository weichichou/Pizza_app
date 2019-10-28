import React from 'react';
import './App.css';
import PizzaListContainer from './component/PizzaListContainer';
import PizzaDetailsContainer from './component/PizzaDetailsContainer';

function App() {
  return (
    <div className="App">
      <PizzaListContainer />
      <PizzaDetailsContainer />
    </div>
  );
}

export default App;
