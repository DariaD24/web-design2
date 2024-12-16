import React, { useState } from 'react';

const ToggleBlock = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Скрыть блок' : 'Показать блок'}
      </button>
      {isVisible && <div>Этот блок можно скрыть или показать</div>}
    </div>
  );
};

export default ToggleBlock;
