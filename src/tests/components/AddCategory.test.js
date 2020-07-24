import React from 'react';
import {shallow} from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Tests for <AddCategory />', () => {
  let wrapper;
  const setCategories = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('Should show <AddCategory /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should test input on change', () => {
    const input = wrapper.find('input');
    const value = 'Test text';
    const event = {
      target: {
        value: value
      }
    }
    input.simulate('change', event);
  });

  test('Should not post the data on submit due to invalid data', () => {
    const event = {
      preventDefault() {} 
    }
    wrapper.find('form').simulate('submit', event);
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('Should call setCategories and set input as empty', () => {
    // Simulate onChange
    const input = wrapper.find('input');
    const inputValue = 'Test text';
    const inputEvent = {
      target: {
        value: inputValue
      }
    };
    input.simulate('change', inputEvent);
    // Simulate onSubmit
    const formEvent = {
      preventDefault() {}
    }
    wrapper.find('form').simulate('submit', formEvent);
    // setCategories must be called
    expect(setCategories).toHaveBeenCalled();
    // input value should be ''
    expect(input.prop('value')).toBe('');
  });
});