import React, { useState } from "react";
import RadioButtonGroup from "./RadioButtonGroup"; // Импортируем дочерний компонент с радиокнопками

function RadioSelection() {
    const [selectedOption, setSelectedOption] = useState(""); // Состояние для выбранного варианта

    // Функция для обновления выбранного варианта
    const handleSelectionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <h1>Выберите котика</h1>
            <RadioButtonGroup onSelectionChange={handleSelectionChange} />
            <h2>Вы выбрали: {selectedOption}</h2> {/* Отображаем выбранный вариант */}
        </div>
    );
}

export default RadioSelection;
