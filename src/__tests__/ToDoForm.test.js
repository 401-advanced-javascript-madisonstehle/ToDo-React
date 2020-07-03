import React from 'react';
import ToDoForm from '../components/ToDoForm.js';
import { shallow, mount, renderer } from 'enzyme';



describe('functionality', () => {
  it('has initial state values', () => {
    function dummyAddTask(state) {
      expect(state).toBe({assignedTo: 'Name Name'});
      return state;
    }
    let component = mount(<ToDoForm addTask={dummyAddTask}/>);
    let assignedTo = component.find('#assignedTo');

    assignedTo.simiulate('change', {target: {value: 'Name Name'}});

    let submit = component.find("button[type='submit']");

    submit.simulate('click');
  });
});
