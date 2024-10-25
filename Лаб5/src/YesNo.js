import React, { useState } from 'react';

function YesNo() {
    const [text, setText] = useState("Нет");
    function reverseText() {
        if (text == "Нет") setText("Да")
        else setText("Нет")
    }

    return (
        <div>
            <p> Выбери {text}</p>
            <button onClick={reverseText}>
                Нажми меня
            </button>
        </div>
    );
}

export default YesNo;