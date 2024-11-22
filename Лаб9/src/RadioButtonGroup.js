import React from "react";

function RadioButtonGroup({ onSelectionChange }) {
    return (
        <div>
            <label>
                <input
                    type="radio"
                    value="Котик 1"
                    name="radio-group"
                    onChange={onSelectionChange}
                />
                Котик 1
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    value="Котик 2"
                    name="radio-group"
                    onChange={onSelectionChange}
                />
                Котик 2
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    value="Котик 3"
                    name="radio-group"
                    onChange={onSelectionChange}
                />
                Котик 3
            </label>
        </div>
    );
}

export default RadioButtonGroup;
