import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import Counter from './Counter';
// import UserCard from './UserCard';
// import ChangeText from './ChangeText';
// import Button from './Button';
// import { useState } from 'react';
// import Message from './Message';
// import Welcome from './Welcome';
// import Text from './Text';
import Title from './Title';
// import List from './List';
// import YesNo from './YesNo';
// import Button1 from './Button1';
// import Forma from './Forma';
// import Color from './Color';
// import HideText from './HideText';
// import Element from './Element';
// import Vvod from './Vvod';
// import ChangeButton from './ChangeButton';
// import Switch from './Switch';
// import Kotik1 from './Kotik1';
// import Kotik2 from './Kotik2';
import NumberList from './NumberList';
import StringList from './StringList';
import CardList from './CardList';
import NumberFilter from './NumberFilter';
import AddList from './AddList';
import TodoList from './TodoList';
import SortedStringList from './ShortedStringList';
import ProductTable from './ProductTable';
import HoverList from './HoverList';
import ImageGrid from './ImageGrid';
import CardListWithDetails from './CardListWithDetails';

function App() {
  // const [show, setShow] = useState(true);
  // const list = ['Яблоко', 'Банан', 'Апельсин']

  // const [myBool, setmyBool] = useState(true);
  // function toggleBool() {
  //   setmyBool(!myBool)
  // }

  return (
    <div className="App">
      {/* <Header /> */}
      <p>Это ваше первое React-приложение.</p>
      {/* <UserCard name="Даша" age="21"/>
      <button onClick={() => setShow(!show)}>
                Нажми, чтобы скрыть/показать
            </button>
      <ChangeText />
      <Button buttontext="Click"/>
      <Welcome name="Даша"/>
      <Text buttontext="Click"/> */}
      <Title number="8" />
      {/* <List fruits={list}/>
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
      {myBool ? <Kotik1 toggleBool={toggleBool} /> : <Kotik2 toggleBool={toggleBool} />} */}
      <NumberList />
      <StringList />
      <CardList people={[{name: 'Дарья', age: 21}, {name: 'Катя', age: 20}, {name: 'Кирилл', age: 21}]} />
      <NumberFilter numbers={[1, 2, 3, 4, 5, 6]} />
      <AddList initialItems={['котик1', 'котик2']} />
      <TodoList />
      <SortedStringList items={['Cherry', 'Apple', 'Banana', 'Strawberry']} />
      <ProductTable products={[{ name: 'клубника', price: '150 рублей' }, { name: 'бананы', price: '100 рублей' }]} />
      <HoverList items={['Котик 1', 'Котик 2', 'Котик 3']} />
      <ImageGrid images={[{ url: 'https://i.pinimg.com/originals/30/a0/2b/30a02b9d7517d5b27803c8180d8123c6.jpg' },
      { url: 'https://steamuserimages-a.akamaihd.net/ugc/5103172932219996638/4FE828816AAF7B0660DD1BD7C94EBD54C68EF692/?imw=512&amp;&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false' },
      { url: 'https://simbio.ru/mdzh/wp-content/uploads/2019/11/332216-alexfas01.jpg' }]} />
      <CardListWithDetails items={[
    { title: 'Картинка 1', description: 'Котик 1', image: 'https://i.pinimg.com/originals/30/a0/2b/30a02b9d7517d5b27803c8180d8123c6.jpg' },
    { title: 'Картинка 2', description: 'Котик 2', image: 'https://steamuserimages-a.akamaihd.net/ugc/5103172932219996638/4FE828816AAF7B0660DD1BD7C94EBD54C68EF692/?imw=512&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false' },
    { title: 'Картинка 3', description: 'Котик 3', image: 'https://simbio.ru/mdzh/wp-content/uploads/2019/11/332216-alexfas01.jpg' }, ]}/>
      {/* <Footer /> */}
      </div>
      

  );
}

export default App;
