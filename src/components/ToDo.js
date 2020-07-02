import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import Form from './ToDoForm.js';
import List from './ToDoList.js';

import useFetch from '../hooks/useFetch.js';

function ToDo() {
  const [ list, setList ] = useState([]);
  const { setRequest, response } = useFetch({
    url: 'https://todo-server-401n16.herokuapp.com/api/v1/todo',
  });

  async function addTask(taskDetails) {
    await setRequest({
      url: 'https://todo-server-401n16.herokuapp.com/api/v1/todo',
      method: 'POST',
      body: taskDetails,
    });
  };

  async function updateTask(idx, updatedTask) {
    await setRequest({
      url: `https://todo-server-401n16.herokuapp.com/api/v1/todo/${response[idx]._id}`,
      method: 'PUT',
      body: updatedTask
    })
  };

  async function deleteTask(idx) {
    await setRequest({
    url: `https://todo-server-401n16.herokuapp.com/api/v1/todo/${response[idx]._id}`,
    method: 'DELETE',
    });
  }

  // function updateTask(idx, updatedTask) {
  //   let currentTasks = [...list];
  //   currentTasks[idx] = updatedTask;
  //   setList(currentTasks);
  // }

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
