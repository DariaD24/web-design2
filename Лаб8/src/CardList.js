import React from 'react';

function CardList({ people }) {
  return (
    <div>
      {people.map((person, index) => (
        <div key={index} className="card">
          <h3>{person.name}</h3>
          <p>Age: {person.age}</p>
        </div>
      ))}
    </div>
  );
}

export default CardList;