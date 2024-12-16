import React, { useState } from 'react';

const WelcomeMessage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // true - авторизован, false - нет

  return (
    <div>
      {isAuthenticated ? <h2>Добро пожаловать!</h2> : <h2>Пожалуйста, войдите</h2>}
      <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
        {isAuthenticated ? 'Выйти' : 'Войти'}
      </button>
    </div>
  );
};

export default WelcomeMessage;

