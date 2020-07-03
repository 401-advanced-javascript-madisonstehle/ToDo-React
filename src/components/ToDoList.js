import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';

import Item from './ToDoItem.js';

function List(props) {
  let items = [];

  if (props.list) {
    for ( let i = 0; i < props.list.length; i++ ) {
      items.push(
        <Item 
          item={props.list[i]} 
          key={i} 
          idx={i} 
          deleteTask= {props.deleteTask} 
          updateTask={props.updateTask}
          />
      );
    }
  }

  return (
    <CardColumns>
      { items }
    </CardColumns>
  )
}

export default List;