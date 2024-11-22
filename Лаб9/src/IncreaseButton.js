import React from "react";

function IncreaseButton({ onIncrement }) {
    return (
        <button onClick={onIncrement}>Увеличить</button>
    );
}

export default IncreaseButton;
