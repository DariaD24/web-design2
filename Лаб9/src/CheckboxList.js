import React from "react";

function CheckboxList({ selected, onCheckboxChange }) {
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={selected[0]}
                    onChange={(e) => onCheckboxChange(0, e.target.checked)}
                />
                Котик 1
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={selected[1]}
                    onChange={(e) => onCheckboxChange(1, e.target.checked)}
                />
                Котик 2
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={selected[2]}
                    onChange={(e) => onCheckboxChange(2, e.target.checked)}
                />
                Котик 3
            </label>
        </div>
    );
}

export default CheckboxList;
