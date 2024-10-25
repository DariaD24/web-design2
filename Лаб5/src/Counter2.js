import React, { useState } from 'react';

function Counter2() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Вы нажали {count} раз</p>
            <button onClick={() => setCount(count +1)}>
                Кнопка
            </button>
        </div>
    );
}

export default Counter2;