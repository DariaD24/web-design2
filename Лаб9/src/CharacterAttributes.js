import React, { useState } from "react";
import AttributeInput from "./AttributeInput"; // Импортируем дочерний компонент

function CharacterAttributes() {
    // Состояния для каждой характеристики
    const [strength, setStrength] = useState(0);   // Сила
    const [agility, setAgility] = useState(0);     // Ловкость
    const [intelligence, setIntelligence] = useState(0); // Интеллект

    // Функции для обновления характеристик
    const handleStrengthChange = (value) => {
        setStrength(value);
    };

    const handleAgilityChange = (value) => {
        setAgility(value);
    };

    const handleIntelligenceChange = (value) => {
        setIntelligence(value);
    };

    return (
        <div>
            <h1>Настройка характеристик персонажа</h1>

            {/* Дочерние компоненты для каждой характеристики */}
            <AttributeInput 
                label="Сила" 
                value={strength} 
                onChange={handleStrengthChange} 
            />
            <AttributeInput 
                label="Ловкость" 
                value={agility} 
                onChange={handleAgilityChange} 
            />
            <AttributeInput 
                label="Интеллект" 
                value={intelligence} 
                onChange={handleIntelligenceChange} 
            />

            {/* Сводная таблица характеристик */}
            <h2>Сводная таблица характеристик</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Характеристика</th>
                        <th>Значение</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Сила</td>
                        <td>{strength}</td>
                    </tr>
                    <tr>
                        <td>Ловкость</td>
                        <td>{agility}</td>
                    </tr>
                    <tr>
                        <td>Интеллект</td>
                        <td>{intelligence}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CharacterAttributes;
