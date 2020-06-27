import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';

import Item from './ToDoItem.js';

function List(props) {
  let items = [];

  for ( let i = 0; i < props.list.length; i++ ) {
    items.push(<Item item={props.list[i]} key={i} idx={i} updateTask={props.updateTask}/>);
  }

  return (
    <CardColumns>
      { items }
    </CardColumns>
  )
}

export default List;