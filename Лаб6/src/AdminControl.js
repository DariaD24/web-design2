import React, { useState } from 'react';

const AdminControl = () => {
  const [isAdmin, setIsAdmin] = useState(false); // false - не админ, true - админ

  return (
    <div>
      <h2>{isAdmin ? 'Вы администратор' : 'Вы не администратор'}</h2>
      {isAdmin && (
        <button onClick={() => alert('Кнопка управления нажата')}>
          Управление
        </button>
      )}
      <button onClick={() => setIsAdmin(!isAdmin)}>
        {isAdmin ? 'Выйти из аккаунта' : 'Войти как администратор'}
      </button>
    </div>
  );
};

export default AdminControl;

