import React from 'react';
import Container from 'react-bootstrap/Container';

import Form from './ToDoForm.js';
import List from './ToDoList.js';

import useFetch from '../hooks/useFetch.js';

function ToDo(props) {
  const { setRequest, response } = useFetch({
    url: 'https://todo-server-401n16.herokuapp.com/api/v1/todo',
  });

  async function addTask(taskDetails) {
    console.log('TODO POST:', taskDetails);

    await setRequest({
      url: 'https://todo-server-401n16.herokuapp.com/api/v1/todo',
      method: 'POST',
      body: taskDetails,
      runGet: 'https://todo-server-401n16.herokuapp.com/api/v1/todo',
    });
  };

  async function updateTask(idx, updatedTask) {
    await setRequest({
      url: `https://todo-server-401n16.herokuapp.com/api/v1/todo/${response[idx]._id}`,
      method: 'PUT',
      body: updatedTask,
      runGet: 'https://todo-server-401n16.herokuapp.com/api/v1/todo',
    })
  };

  async function deleteTask(idx) {
    await setRequest({
      url: `https://todo-server-401n16.herokuapp.com/api/v1/todo/${response[idx]._id}`,
      method: 'DELETE',
      runGet: 'https://todo-server-401n16.herokuapp.com/api/v1/todo',
    });
  }

  return(
    <Container>
      <Form 
        addTask= { addTask } 
        />
      <List 
        list={ response }
        updateTask= { updateTask }
        deleteTask={ deleteTask } 
        />
    </Container>
  )
}

export default ToDo;
