import React from 'react';
import './App.css';
import PizzaListContainer from './component/PizzaListContainer';
import PizzaDetailsContainer from './component/PizzaDetailsContainer';
import AddPizzaFormContainer from './component/AddPizzaFormContainer';

function App() {
  return (
    <div className="App">
      <AddPizzaFormContainer />
      <PizzaListContainer />
      <PizzaDetailsContainer />
    </div>
  );
}

export default App;
