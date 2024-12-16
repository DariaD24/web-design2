import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div style={{ backgroundColor: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'black' }}>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Переключить режим
      </button>
    </div>
  );
};

export default DarkModeToggle;
