import React from 'react';

const numbers = ['1', '2', '3', '4', '5'];
const listNumbers = numbers.map(number => <li>{number}</li>);

function NumberList() {
    return <ul>{listNumbers}</ul>;
}

export default NumberList;