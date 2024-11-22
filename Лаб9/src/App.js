import logo from './logo.svg';
import './App.css';
import React from 'react';

import Title from './Title';
import Parent from './Parent';
import CounterParent from './CounterParent';
import FormParent from './FormParent';
import CheckboxContainer from './CheckboxContainer';
import TodoApp from './TodoApp';
import ToggleParent from './ToggleParent';
import FullNameApp from './FullNameApp';
import SumCalculator from './SumCalculator';
import RadioSelection from './RadioSelection';
import TemperatureConverter from './TemperatureConverter';
import CharacterAttributes from './CharacterAttributes';


function App() {


  return (
    <div className="App">
      <p>Это ваше первое React-приложение.</p>
      <Title number="9" />
      <Parent />
      <CounterParent />
      <FormParent />
      <CheckboxContainer />
      <TodoApp />
      <ToggleParent />
      <FullNameApp />
      <SumCalculator />
      <RadioSelection />
      <TemperatureConverter />
      <CharacterAttributes />
      {/* <Footer /> */}
      </div>
      

  );
}

export default App;
