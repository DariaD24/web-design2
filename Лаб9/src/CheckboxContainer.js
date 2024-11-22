import React, { useState } from "react";
import CheckboxList from './CheckboxList'; // Новый компонент с чекбоксами

function CheckboxContainer() {
    const [selected, setSelected] = useState([false, false, false]); // Массив для отслеживания состояния чекбоксов

    const handleCheckboxChange = (index, isChecked) => {
        const newSelected = [...selected];
        newSelected[index] = isChecked;
        setSelected(newSelected);
    };

    const isAnyChecked = selected.includes(true); // Проверка, выбран ли хотя бы один чекбокс

    return (
        <div>
            <CheckboxList selected={selected} onCheckboxChange={handleCheckboxChange} />
            {isAnyChecked && <p>Выбрано</p>} {/* Показываем сообщение, если хотя бы один чекбокс выбран */}
        </div>
    );
}

export default CheckboxContainer;
