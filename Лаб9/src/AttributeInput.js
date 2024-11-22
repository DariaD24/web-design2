import React from "react";

function AttributeInput({ label, value, onChange }) {
    return (
        <div>
            <label>{label}: </label>
            <input
                type="number"
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                min="0"
                max="100"
            />
        </div>
    );
}

export default AttributeInput;
