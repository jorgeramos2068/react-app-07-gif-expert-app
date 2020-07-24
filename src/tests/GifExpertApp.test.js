import React from 'react';
import {shallow} from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Tests for <GifExpertApp />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GifExpertApp />);
  });

  test('Should display <GifExpertApp /> correctly', () => {
    wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Should show a list of categories', () => {
    const categories = ['Batman', 'Robin'];
    wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);

  });
});
