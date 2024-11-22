import React, { useState } from "react";
import IncreaseButton from "./IncreaseButton"; // Импортируем дочерний компонент для увеличения
import DecreaseButton from "./DecreaseButton"; // Импортируем дочерний компонент для уменьшения

function CounterParent() {
    // Состояние для счётчика
    const [counter, setCounter] = useState(0);

    // Функция для увеличения счётчика
    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    // Функция для уменьшения счётчика
    const decrementCounter = () => {
        setCounter(counter - 1);
    };

    return (
        <div>
            <h1>Счётчик: {counter}</h1>

            {/* Дочерние компоненты для увеличения и уменьшения */}
            <IncreaseButton onIncrement={incrementCounter} />
            <DecreaseButton onDecrement={decrementCounter} />
        </div>
    );
}

export default CounterParent;
