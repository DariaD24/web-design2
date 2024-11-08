import React from 'react';

function List(props) {

    return props.fruits.map(fruit=> <li>{fruit}</li>);
    
}
export default List;