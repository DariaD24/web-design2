import React, { useState } from 'react';

const UserStatus = () => {
  const [isOnline, setIsOnline] = useState(true); // true - онлайн, false - оффлайн

  return (
    <div>
      <h2>Статус пользователя: {isOnline ? 'Онлайн' : 'Офлайн'}</h2>
      <button onClick={() => setIsOnline(!isOnline)}>
        Переключить статус
      </button>
    </div>
  );
};

export default UserStatus;

