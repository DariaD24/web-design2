import {useState} from 'react';

function HideText() {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div>
            {isVisible && <p>Этот текст можно скрыть</p>}
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Скрыть' : 'Показать'}  
            </button>
        </div>
    )
}

export default HideText;