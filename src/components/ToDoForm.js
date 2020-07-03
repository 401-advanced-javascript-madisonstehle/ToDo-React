import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import useForm from '../hooks/useForm.js'

function ToDoForm(props) {
  const [update, submitForm, data] = useForm(props.addTask);

  return (            
    <Form onSubmit= { submitForm }>
      <Form.Group controlId='description'>
        <Form.Label>Task Description: </Form.Label>
        <Form.Control
            as='textarea'
            rows='3'
            onChange={(e) => {
              update('description', e.target.value);
            }}
          />
      </Form.Group>

      <Form.Group controlId='assignedTo'>
        <Form.Label>Assigned To: </Form.Label>
        <Form.Control
            type='text'
            placeholder='Enter name'
            onChange={(e) => {
              update('assignedTo', e.target.value);
            }}    
          />
      </Form.Group>

      <Form.Group controlId='status'>
        <Form.Label>Completed: </Form.Label>
        <Form.Check
            id='status-box'
            type='checkbox'
            label={data.status ? 'Complete' : 'Incomplete'}
            checked={data.status}
            onChange={(e) => {
              update('status', e.target.checked);
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
          onChange={(e) => {
            update('difficulty', e.target.value);

          }}
        />
      </Form.Group>

      <Button 
        variant='primary' 
        size='lg' 
        type='submit'
        onClick={ submitForm }
      >Submit</Button>
    </Form>
  )
}



export default ToDoForm;
