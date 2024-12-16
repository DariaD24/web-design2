import React, { useState } from 'react';

const ShowComments = () => {
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsCommentsVisible(!isCommentsVisible)}>
        Показать комментарии
      </button>
      {isCommentsVisible && <div>Комментарий: ПОМОГИТЕЕЕЕЕЕЕЕЕЕЕЕЕ!</div>}
    </div>
  );
};

export default ShowComments;
