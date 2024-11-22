import React, { useState } from "react";

function FullNameApp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    return (
        <div>
            <h1>Введите ваше имя и фамилию</h1>
            <input
                type="text"
                placeholder="Имя"
                value={firstName}
                onChange={handleFirstNameChange}
            />
            <br />
            <input
                type="text"
                placeholder="Фамилия"
                value={lastName}
                onChange={handleLastNameChange}
            />
            <br />
            <h2>Полное имя: {firstName} {lastName}</h2>
        </div>
    );
}

export default FullNameApp;
