import React, { useState } from 'react';

function Kotik1(props){
  return (
    <div>
      <h1>Котик1</h1>
      <button onClick={props.toggleBool}>Button</button>
    </div>
  )
}

export default Kotik1;