import React from 'react';

function List (props) {
  return (
     <div className="container">
      <h1>Grocery List</h1>
    <ul className="list-group">

      {/* TODO: Use the `map` method to iterate over each grocery and return a `li` element that contains the item's name and has a unique key attribute */}
      {props.groceries.map((item) => {
        return (
          <li key={item.id}>{item.name}</li>
         
        );
      })}
    </ul>
    </div>
  );
}

export default List;
