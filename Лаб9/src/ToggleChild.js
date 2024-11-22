import React from "react";

function ToggleChild({ toggleVisibility }) {
    return (
        <div>
            <button onClick={toggleVisibility}>Переключатель</button>
        </div>
    );
}

export default ToggleChild;
