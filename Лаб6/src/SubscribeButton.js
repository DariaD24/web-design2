import React, { useState } from 'react';

const SubscribeButton = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <button onClick={() => setIsSubscribed(!isSubscribed)}>
      {isSubscribed ? 'Отписаться' : 'Подписаться'}
    </button>
  );
};

export default SubscribeButton;
