import React from "react";

function TemperatureInput({ label, value, onChange }) {
    return (
        <div>
            <input
                type="number"
                placeholder={label}
                value={value}
                onChange={(e) => onChange(e.target.value)} // Передаем изменения родителю
            />
            <span>{label === "Цельсии" ? "°C" : "°F"}</span> {/* Отображаем соответствующие единицы измерения */}
        </div>
    );
}

export default TemperatureInput;
