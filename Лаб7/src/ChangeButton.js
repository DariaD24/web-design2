import React, { useState } from 'react';

function ChangeButton() {
  const [buttonText, setButtonText] = useState('Старт');
  
  const changeButtonText = () => {
    if (buttonText === 'Старт') {
      setButtonText('Стоп');
    } else if (buttonText === 'Стоп') {
      setButtonText('Перезапуск');
    } else {
      setButtonText('Старт');
    }
  };

  return (
    <div>
      <button onClick={changeButtonText}>{buttonText}</button>
    </div>
  );
}

export default ChangeButton;
