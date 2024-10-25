import React, { useState } from 'react';

function ChangeText() {
    const [text, setText] = useState("котик");
    function reverseText() {
        if (text == "котик") setText("Дарья")
        else setText("котик")
    }

    return (
        <div>
            <p>Привет {text}</p>
            <button onClick={reverseText}>
                Нажми меня
            </button>
        </div>
    );
}

export default ChangeText;