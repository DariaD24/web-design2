import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Counter from './Counter';
import UserCard from './UserCard';
import ChangeText from './ChangeText';
import Button from './Button';
import { useState } from 'react';
import Message from './Message';
import Welcome from './Welcome';
import Text from './Text';
import Title from './Title';
import List from './List';
import YesNo from './YesNo';
import Button1 from './Button1';
import Forma from './Forma';
import Color from './Color';
import HideText from './HideText';
import Element from './Element';
import Vvod from './Vvod';
import ChangeButton from './ChangeButton';
import Switch from './Switch';
import Kotik1 from './Kotik1';
import Kotik2 from './Kotik2';

function App() {
  const [show, setShow] = useState(true);
  const list = ['Яблоко', 'Банан', 'Апельсин']

  const [myBool, setmyBool] = useState(true);
  function toggleBool() {
    setmyBool(!myBool)
  }

  return (
    <div className="App">
      <Header />
      <p>Это ваше первое React-приложение.</p>
      <UserCard name="Даша" age="21"/>
      <button onClick={() => setShow(!show)}>
                Нажми, чтобы скрыть/показать
            </button>
      <ChangeText />
      <Button buttontext="Click"/>
      <Welcome name="Даша"/>
      <Text buttontext="Click"/>
      <Title number="5" />
      <List fruits={list}/>
      <YesNo />
      <Button1 buttontext="Click"/>
      <Message /> 
      <Forma />
      <Color />
      <HideText />
      {show ? <Counter /> : <></>}
      <Element />
      <Vvod />
      <ChangeButton />
      <Switch />
      {myBool ? <Kotik1 toggleBool={toggleBool} /> : <Kotik2 toggleBool={toggleBool} />}
      <Footer />
      </div>
      

  );
}

export default App;
