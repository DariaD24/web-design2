import React from "react";

function FormInput({ formData, onInputChange }) {
    return (
        <form>
            <div>
                <label htmlFor="name">Имя:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={onInputChange}
                />
            </div>
            <div>
                <label htmlFor="text">Кличка кота:</label>
                <input
                    type="text"
                    id="text"
                    name="text"
                    value={formData.text}
                    onChange={onInputChange}
                />
            </div>
        </form>
    );
}

export default FormInput;