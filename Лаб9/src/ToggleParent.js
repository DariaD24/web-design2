import React, { useState } from "react";
import ToggleChild from "./ToggleChild"; // Импортируем дочерний компонент

function ToggleParent() {
    const [isVisible, setIsVisible] = useState(false); // Состояние для видимости текста

    // Функция для переключения состояния видимости
    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState);
    };

    return (
        <div>
            <ToggleChild toggleVisibility={toggleVisibility} />
            {isVisible && <p>Поставьте 5!</p>} {/* Отображаем текст, если isVisible === true */}
        </div>
    );
}

export default ToggleParent;
