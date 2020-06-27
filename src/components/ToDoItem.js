import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function Item(props) {
  const [ status, setStatus ] = useState(props.item.status)

  return (
    <Card>
      <Card.Body>
        <Card.Title as='h5'>Task:</Card.Title>
        <Card.Text>{props.item.description}</Card.Text>

        <Card.Title as='h5'>Assigned To:</Card.Title>
        <Card.Text>{props.item.assignedTo}</Card.Text>

        <Card.Title as='h5'>Difficulty:</Card.Title>
        <Card.Text>{props.item.difficulty}</Card.Text>

        <Card.Title as='h5'>Status:</Card.Title>
        <Form>
          <Form.Group controlId='status'>
          <Form.Label>Completed: </Form.Label>
          <Form.Check
              id='status-switch'
              type='checkbox'
              label={status ? 'Complete' : 'Incomplete'}
              checked={status}
              onChange={(e) => {
                setStatus(!status);
              }}
          />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>

    // <div className='item'>
    //   <div>
    //     <h5>Task:</h5>
    //     <p>{props.item.description}</p>
    //   </div>

    //   <div>
    //     <h5>Assigned To:</h5>
    //     <p>{props.item.assignedTo}</p>
    //   </div>

    //   <div>
    //     <h5>Difficulty:</h5>
    //     <p>{props.item.difficulty}</p>
    //   </div>

    //   <div>
    //     <h5>Status:</h5>
    //     <input
    //       type='checkbox'
    //       checked={status}
    //       onChange={() => {
    //         setStatus(!status);
    //       }}
    //     />
    //   </div>

    // </div>
  )
}

export default Item;