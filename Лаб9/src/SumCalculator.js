import React, { useState } from "react";
import NumberInput from "./NumberInput"; // Импортируем дочерний компонент

function SumCalculator() {
    const [num1, setNum1] = useState(0); // Состояние для первого числа
    const [num2, setNum2] = useState(0); // Состояние для второго числа

    // Функция для обновления первого числа
    const updateNum1 = (value) => {
        setNum1(Number(value)); // Обновляем значение первого числа
    };

    // Функция для обновления второго числа
    const updateNum2 = (value) => {
        setNum2(Number(value)); // Обновляем значение второго числа
    };

    // Сумма двух чисел
    const sum = num1 + num2;

    return (
        <div>
            <h1>Калькулятор суммы</h1>
            <NumberInput label="Число 1" onChange={updateNum1} />
            <NumberInput label="Число 2" onChange={updateNum2} />
            <h2>Сумма: {sum}</h2>
        </div>
    );
}

export default SumCalculator;
