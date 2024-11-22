import React from "react";

function NumberInput({ label, onChange }) {
    return (
        <div>
            <label>{label}:</label>
            <input
                type="number"
                onChange={(e) => onChange(e.target.value)}
                placeholder="Введи число"
            />
        </div>
    );
}

export default NumberInput;
