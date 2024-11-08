import React, { useState } from 'react';

function Button1() {
    const [text, setText] = useState("котик");
    function reverseText() {
        if (text == "котик") setText("Дарья")
        else setText("котик")
    }

    return (
        <div>
            <h1>Привет {text}</h1>
            <button onClick={reverseText}>
                Нажми меня
            </button>
        </div>
    );
}

export default Button1;