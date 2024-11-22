import React from "react";

function DecreaseButton({ onDecrement }) {
    return (
        <button onClick={onDecrement}>Уменьшить</button>
    );
}

export default DecreaseButton;
