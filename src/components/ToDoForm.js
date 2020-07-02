import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import useForm from '../hooks/useForm.js'

function ToDoForm(props) {
  const [update, submit, data] = useForm(props.addTask);

  // const [ description, setDescription ] = useState(props.description || '');
  // const [ assignedTo, setAssignedTo ] = useState(props.assignedTo || '');
  // const [ status, setStatus ] = useState(props.status || 'Incomplete');
  // const [ difficulty, setDifficulty ] = useState(props.difficulty || 1);


  // function updateList(e) {
  //   e.preventDefault();
  //   let item = { description, assignedTo, status, difficulty }
  //   props.updateList( [ ...props.allTasks, item ] );
  // }

  return (            
    <Form>
      <Form.Group controlId='description'>
        <Form.Label>Task Description: </Form.Label>
        <Form.Control
            as='textarea'
            rows='3'
            // value={description}
            onChange={(e) => {
              // setDescription(e.target.value);
              update('description', e.target.value);
            }}
          />
      </Form.Group>

      <Form.Group controlId='assignedTo'>
        <Form.Label>Assigned To: </Form.Label>
        <Form.Control
            type='text'
            placeholder='Enter name'
            // value={assignedTo}
            onChange={(e) => {
              // setAssignedTo(e.target.value);
              update('assignedTo', e.target.value);
            }}    
          />
      </Form.Group>

      <Form.Group controlId='status'>
        <Form.Label>Completed: </Form.Label>
        <Form.Check
            id='status-switch'
            type='checkbox'
            label={!data.status ? 'Complete' : 'Incomplete'}
            checked={!data.status}
            onChange={(e) => {
              // setStatus(!status);
              update('status', !e.target.checked);
            }}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Difficulty:</Form.Label>
        <Form.Control 
          type='range'
          min={1}
          max={5}
          step={1}
          // value={difficulty}
          onChange={(e) => {
            // setDifficulty(e.target.value);
            update('difficulty', e.target.value);

          }}
        />
      </Form.Group>

      <Button variant='primary' size='lg' type='submit' onClick={ useForm }>Submit</Button>
    </Form>
  )
}



export default ToDoForm;
