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
import Counter2 from './Counter2';
import Text from './Text';
import Title from './Title';
import List from './List';
import YesNo from './YesNo';

function App() {
  const [show, setShow] = useState(true);
  const list = ['Яблоко', 'Банан', 'Апельсин']
  return (
    <div className="App">
      <Header />
      <p>Это ваше первое React-приложение.</p>
      <UserCard name="Даша" age="21"/>
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
      <Footer />
      </div>
      

  );
}

export default App;
