import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Item(props) {
  const [ status, setStatus ] = useState(props.item.status)

  return (
    <Card border='dark'>
      <Card.Body>
        <Card.Title as='h5'>Task:</Card.Title>
        <Card.Text>{props.item.description}</Card.Text>

        <Card.Title as='h5'>Assigned To:</Card.Title>
        <Card.Text>{props.item.assignedTo}</Card.Text>

        <Card.Title as='h5'>Difficulty:</Card.Title>
        <Card.Text>{props.item.difficulty}</Card.Text>

        <Card.Title as='h5'>Status:</Card.Title>
        <Form>
          <Form.Group controlId={`status-${props.idx}`}>
            <Form.Check
                variant=''
                id={`status-switch-${props.idx}`}
                type='checkbox'
                label={!status ? 'Complete' : 'Incomplete'}
                checked={!status}
                onChange={(e) => {
                  let newTask = {...props.item};
                  newTask.status = !status;

                  setStatus(!status);
                  props.updateTask(props.idx, newTask);
                }}
            />
          </Form.Group>

          <Button variant='primary' size='sm' type='submit' onClick={ props.deleteTask }>Delete</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default Item;