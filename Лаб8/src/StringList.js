import React from 'react';

const strings = ['Apple', 'Banana', 'Cherry', 'Orange', 'Strawberry'];
const listStrings = strings.map(string => <li>{string}</li>);

function StringList() {
    return <ul>{listStrings}</ul>;
}

export default StringList;