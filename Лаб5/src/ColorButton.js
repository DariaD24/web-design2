import React, { useState } from 'react';

const ColorButton = () => {
  // Состояние для хранения текущего цвета кнопки
  const [color, setColor] = useState('blue'); // Начальный цвет - синий

  // Массив возможных цветов
  const colors = ['blue', 'green'];

  // Функция для изменения цвета при каждом клике
  const changeColor = () => {
    // Получаем текущий индекс цвета в массиве
    const currentIndex = colors.indexOf(color);
    // Определяем следующий индекс, который будет в пределах массива
    const nextIndex = (currentIndex + 1) % colors.length;
    // Обновляем состояние с новым цветом
    setColor(colors[nextIndex]);
  };

  return (
    <div>
      {/* Кнопка, цвет которой зависит от состояния */}
      <button
        style={{ backgroundColor: color, color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}
        onClick={changeColor}
      >
        Нажми меня!
      </button>
    </div>
  );
};

export default ColorButton;
