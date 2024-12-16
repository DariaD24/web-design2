import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import WelcomeMessage from './WelcomeMessage';
import ToggleBlock from './ToggleBlock';
import UserStatus from './UserStatus';
import ShowComments from './ShowComments';
import AdminControl from './AdminControl';
import StockStatus from './StockStatus';
import WarningNotification from './WarningNotification';
import DarkModeToggle from './DarkModeToggle';
import SubscribeButton from './SubscribeButton';
import DescriptionToggle from './DescriptionToggle';
import ProfileCard from './ProfileCard';



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
       <h2>Задание 1: Добро пожаловать</h2>
      <WelcomeMessage />

      <h2>Задание 2: Переключение видимости блока</h2>
      <ToggleBlock />

      <h2>Задание 3: Статус пользователя (онлайн/офлайн)</h2>
      <UserStatus />

      <h2>Задание 4: Показать комментарии</h2>
      <ShowComments />

      <h2>Задание 5: Кнопка для админа</h2>
      <AdminControl />

      <h2>Задание 6: Статус на складе</h2>
      <StockStatus />

      <h2>Задание 7: Уведомление о предупреждении</h2>
      <WarningNotification />

      <h2>Задание 8: Темный / светлый режим</h2>
      <DarkModeToggle />

      <h2>Задание 9: Кнопка подписки</h2>
      <SubscribeButton />

      <h2>Задание 10: Раскрытие текста</h2>
      <DescriptionToggle />
      
      <h2>Индивидуальное задание 4</h2>
      <ProfileCard /> 
      </div>
      

  );
}

export default App;
