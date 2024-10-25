import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Counter from './Counter';
import UserCard from './UserCard';
import ChangeCard from './ChangeText';
import Button from './Button';
import { useState } from 'react';
import Message from './Message';

function App() {
  const [show, setShow] = useState(true);
  
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
      <ChangeCard />
      <Button buttontext="Click"/>
      <Footer />
      </div>
      

  );
}

export default App;
