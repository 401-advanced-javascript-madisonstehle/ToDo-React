import React from 'react';

import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Item(props) {
  return (
    <Card border='dark'>
      <Card.Body>
        <Card.Title as='h5'>Task:</Card.Title>
        <Card.Text>{props.item.text}</Card.Text>

        <Card.Title as='h5'>Assigned To:</Card.Title>
        <Card.Text>{props.item.assignee}</Card.Text>

        <Card.Title as='h5'>Difficulty:</Card.Title>
        <Card.Text>{props.item.difficulty}</Card.Text>

        <Card.Title as='h5'>Status:</Card.Title>
        <Form>
          <Form.Group controlId={`status-${props.idx}`}>
            <Form.Check
                value={props.item.status}
                type='checkbox'
                onChange={(e) => {
                  let newTask = {...props.item};
                  newTask.status = !newTask.status;

                  props.updateTask(props.idx, newTask);
                }}
                id={`status-box-${props.idx}`}
                label={props.item.status ? 'Complete' : 'Incomplete'}
                checked={props.item.status}
            />
          </Form.Group>

          <Button 
            variant='primary' 
            size='sm' 
            onClick={ () => {
              props.deleteTask(props.idx);
            } }
          >Delete</Button>

        </Form>
      </Card.Body>
    </Card>
  )
}

export default Item;