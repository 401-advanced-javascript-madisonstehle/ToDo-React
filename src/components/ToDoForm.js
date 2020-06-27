import React, { useState } from 'react';

function Form(props) {
  const [ description, setDescription ] = useState('');
  const [ assignedTo, setAssignedTo ] = useState('');
  const [ status, setStatus ] = useState(false);


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


      <button type='submit'>Submit</button>
    </>
  )
}

export default Form;