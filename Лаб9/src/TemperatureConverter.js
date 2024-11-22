import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput"; // Импортируем дочерний компонент

function TemperatureConverter() {
    const [celsius, setCelsius] = useState(""); // Состояние для температуры в Цельсиях
    const [fahrenheit, setFahrenheit] = useState(""); // Состояние для температуры в Фаренгейтах

    // Функция для конвертации температуры из Цельсия в Фаренгейт
    const convertCelsiusToFahrenheit = (celsius) => {
        return (celsius * 9/5) + 32;
    };

    // Функция для конвертации температуры из Фаренгейта в Цельсий
    const convertFahrenheitToCelsius = (fahrenheit) => {
        return (fahrenheit - 32) * 5/9;
    };

    // Обработчик изменения температуры в Цельсиях
    const handleCelsiusChange = (value) => {
        setCelsius(value);
        setFahrenheit(value !== "" ? convertCelsiusToFahrenheit(value) : ""); // Конвертируем в Фаренгейты
    };

    // Обработчик изменения температуры в Фаренгейтах
    const handleFahrenheitChange = (value) => {
        setFahrenheit(value);
        setCelsius(value !== "" ? convertFahrenheitToCelsius(value) : ""); // Конвертируем в Цельсии
    };

    return (
        <div>
            <h1>Конвертер температуры</h1>
            
            {/* Дочерний компонент для ввода температуры в Цельсиях */}
            <TemperatureInput 
                label="Цельсии"
                value={celsius}
                onChange={handleCelsiusChange}
            />
            
            {/* Дочерний компонент для ввода температуры в Фаренгейтах */}
            <TemperatureInput 
                label="Фаренгейты"
                value={fahrenheit}
                onChange={handleFahrenheitChange}
            />
        </div>
    );
}

export default TemperatureConverter;

