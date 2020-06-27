import React, { useState } from 'react';

function Form(props) {
  const [ description, setDescription ] = useState('');
  const [ assignedTo, setAssignedTo ] = useState('');
  const [ status, setStatus ] = useState(false);

  function updateList() {
    let item = { description, assignedTo, status }
    props.updateList( [ ...props.allTasks, item ] );
  }

  return (            
    <>
      <div>
        <label>Task Description: </label>
        <input
            type='text'
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
      </div>

      <div>
        <label>Assigned To: </label>
        <input
            type='text'
            value={assignedTo}
            onChange={(e) => {
              setAssignedTo(e.target.value);
            }}    
          />
      </div>

      <div>
        <label>Completed: </label>
        <input
            type='checkbox'
            checked={status}
            onChange={(e) => {
              setStatus(!status);
            }}
        />
      </div>


      <button type='submit' onClick={ updateList }>Submit</button>
    </>
  )
}

export default Form;