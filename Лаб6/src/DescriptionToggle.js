import React, { useState } from 'react';

const DescriptionToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Скрыть описание' : 'Подробнее'}
      </button>
      {isOpen && <p>ПОМОГИТЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕ</p>}
    </div>
  );
};

export default DescriptionToggle;
