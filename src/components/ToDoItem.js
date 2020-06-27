import React, { useState } from 'react';

function Item(props) {
  const [ status, setStatus ] = useState(props.item.status)

  return (
    <div className='item'>
      <div>
        <h5>Task:</h5>
        <p>{props.item.description}</p>
      </div>

      <div>
        <h5>Assigned To:</h5>
        <p>{props.item.assignedTo}</p>
      </div>

      <div>
        <h5>Status:</h5>
        <input
          type='checkbox'
          checked={status}
          onChange={() => {
            setStatus(!status);
          }}
        />
      </div>
    </div>
  )
}

export default Item;