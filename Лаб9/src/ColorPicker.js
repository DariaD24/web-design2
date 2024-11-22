import React from "react";

function ColorPicker({ onChange }) {
    return (
        <select onChange={(e) => onChange(e.target.value)}>
            <option value="#000080">Цвет1</option>
            <option value="#800080">Цвет2</option>
            <option value="#00ffff">Цвет3</option>
        </select>
    );
}

export default ColorPicker;