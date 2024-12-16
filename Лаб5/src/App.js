import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import Hello from './Hello';
import Counter from './Counter';
import TextInputForm from './TextInputForm';
import HeaderText from './HeaderText';
import ItemList from './ItemList';
import ToggleText from './ToggleText';
import CharCount from './CharCount';
import EditHeader from './EditHeader';
import DayNight from './DayNight';
import ImageWithCaption from './ImageWithCaption';

function App() {
  // const [show, setShow] = useState(true);
  // const list = ['Яблоко', 'Банан', 'Апельсин']
  return (
    <div className="App">
      
      <p>Это ваше первое React-приложение.</p>
      {/* <UserCard name="Даша" age="21"/>
      {show ? <Counter /> : <></>}
      <button onClick={() => setShow(!show)}>
                Нажми, чтобы скрыть/показать
            </button>
      <Message /> 
      <ChangeText />
      <Button buttontext="Click"/>
      <Welcome name="Даша"/>
      {show ? <Counter2 /> : <></>}
      <Text buttontext="Click"/>
      <Title number="5" />
      <List fruits={list}/>
      <YesNo />
      
      <Footer /> */}
      <Hello name="Дарья"/>
      <Counter />
      <TextInputForm />
      <HeaderText text="Заголовок через props" />
      <ItemList items={['Элемент 1', 'Элемент 2', 'Элемент 3']} />
      <ToggleText />
      <CharCount />
      <EditHeader />
      <DayNight />
      <ImageWithCaption src="https://a.d-cd.net/XmtPdFb25hEB7iT9G2Qul-LzHz8-1920.jpg" caption="Котик" />
      </div>
      

  );
}

export default App;
