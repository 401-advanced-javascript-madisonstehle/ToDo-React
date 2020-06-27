import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import Form from './ToDoForm.js';
import List from './ToDoList.js';

function ToDo() {
  const [ list, setList ] = useState([]);

  function updateTask(idx, updatedTask) {
    let currentTasks = [...list];
    currentTasks[idx] = updatedTask;
    setList(currentTasks);
  }

  useEffect(() => {
    let incomplete = 0;

    for(let i = 0; i< list.length; i++) {
      if (list[i].status) {
        incomplete++;
      }
    }

    if (incomplete === 1) document.title = '1 incomplete task';
    else if (incomplete) document.title = `${incomplete} incomplete tasks`;
    else document.title = 'All tasks complete!';
  })

  return(
    <Container>
      <Form updateList={ setList } allTasks={ list } />
      <List list={ list } updateList={ setList } updateTask= { updateTask }/>
    </Container>
  )
}

export default ToDo;
