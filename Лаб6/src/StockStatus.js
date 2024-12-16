import React, { useState } from 'react';

const StockStatus = () => {
  const [isInStock, setIsInStock] = useState(true); // true - на складе, false - нет в наличии

  return (
    <div>
      <h2>{isInStock ? 'На складе' : 'Нет в наличии'}</h2>
      <button onClick={() => setIsInStock(!isInStock)}>
        Переключить статус
      </button>
    </div>
  );
};

export default StockStatus;
