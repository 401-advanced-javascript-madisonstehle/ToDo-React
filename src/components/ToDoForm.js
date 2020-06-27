import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ToDoForm(props) {
  const [ description, setDescription ] = useState(props.description || '');
  const [ assignedTo, setAssignedTo ] = useState(props.assignedTo || '');
  const [ status, setStatus ] = useState(props.status || 'Incomplete');
  const [ difficulty, setDifficulty ] = useState(props.difficulty || 1);


  function updateList(e) {
    e.preventDefault();
    let item = { description, assignedTo, status, difficulty }
    props.updateList( [ ...props.allTasks, item ] );
  }

  return (            
    <Form>
      <Form.Group controlId='description'>
        <Form.Label>Task Description: </Form.Label>
        <Form.Control
            as='textarea'
            rows='3'
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
      </Form.Group>

      <Form.Group controlId='assignedTo'>
        <Form.Label>Assigned To: </Form.Label>
        <Form.Control
            type='text'
            placeholder='Enter name'
            value={assignedTo}
            onChange={(e) => {
              setAssignedTo(e.target.value);
            }}    
          />
      </Form.Group>

      <Form.Group controlId='status'>
        <Form.Label>Completed: </Form.Label>
        <Form.Check
            id='status-switch'
            type='checkbox'
            label={!status ? 'Complete' : 'Incomplete'}
            checked={!status}
            onChange={(e) => {
              setStatus(!status);
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
          value={difficulty}
          onChange={(e) => {
            setDifficulty(e.target.value);
          }}
        />
      </Form.Group>

      <Button variant='primary' type='submit' onClick={ updateList }>Submit</Button>
    </Form>
  )
}



export default ToDoForm;