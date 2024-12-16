import React, { useState } from 'react'; // импортируем useState
import './App.css';

const ProfileCard = () => {
  // создаем состояние для видимости дополнительной информации
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const toggleInfo = () => {
    setIsInfoVisible(!isInfoVisible); // переключаем видимость
  };

  return (
    <div className="card"> {/* Меняем с profile-card на card */}
      <img src="https://static1.vivoo.ru/datas/photos/750x750/66/80/fa6cf849f66c027f240ee164b65a.jpg?0" alt="User" className="image"/> {/* Добавляем класс image */}
      <h3>Сергей</h3>
      <p>Возраст: 25</p>
      <p>Увлечения: Конный спорт</p>
      <p>Что ищет: Партнёр для конного спорта</p>

      {/* Кнопка, которая переключает видимость дополнительной информации */}
      <button className="button" onClick={toggleInfo}>Показать информацию</button> {/* Добавляем класс button */}

      {/* Дополнительная информация, которая отображается при нажатии на кнопку */}
      {isInfoVisible && (
        <div className="extraInfo"> {/* Меняем с extra-info на extraInfo */}
          <p>Кроме конного спорта, Сергей больше ничего не интересует.</p>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
