import {useState} from 'react';

 function Color() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: isActive ? 'salmon' : '',
          color: isActive ? 'white' : '',
        }}
        onClick={handleClick}
      >
        Click
      </button>
    </div>
  );
}

export default Color;