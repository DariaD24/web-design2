import React, { useState } from 'react';

const WarningNotification = () => {
  const [isWarning, setIsWarning] = useState(false); // false - нет уведомления, true - показать уведомление

  return (
    <div>
      {isWarning && (
        <div style={{ padding: '10px', backgroundColor: 'yellow', border: '1px solid red', borderRadius: '5px' }}>
          Внимание! Это предупреждающее уведомление.
        </div>
      )}
      <button onClick={() => setIsWarning(!isWarning)}>
        {isWarning ? 'Скрыть уведомление' : 'Показать уведомление'}
      </button>
    </div>
  );
};

export default WarningNotification;

