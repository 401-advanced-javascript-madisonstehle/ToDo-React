import React from 'react';

import Item from './ToDoItem.js';

function List(props) {
  let items = [];

  for ( let i = 0; i < props.list.length; i++ ) {
    items.push(<Item item={props.list[i]} key={i}/>);
  }

  return (
    <div className='list'>
      { items }
    </div>
  )
}

export default List;