import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import ToDo from '../components/ToDo.js';

configure({ adapter: new Adapter() });

describe('functionality', () => {
  it('has initial state values', () => {
    let component = shallow(<ToDo />);
    // expect(component.state('list')).toBe([]);
  });
});
