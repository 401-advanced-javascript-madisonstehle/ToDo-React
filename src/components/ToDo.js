import React, { useState } from 'react';

import Form from './ToDoForm.js';
import List from './ToDoList.js';

function ToDo() {
  const [ list, setList ] = useState([]);

  return(
    <div>
      <Form updateList={ setList } allTasks={ list } />
      <List list={ list } />
    </div>
  )
}

export default ToDo;
