import React from 'react';
import {shallow} from 'enzyme';
import GifGrid from '../../components/GifGrid';
import {useFetchGifs} from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Tests for <GifGrid />', () => {
  let wrapper;
  const category = 'Test';

  test('Should display <GifGrid /> correctly', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });
    wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Should show the list of items when loading via useFetchGifs custom hook', () => {
    const gifs = [{
      id: '1',
      url: 'https://localhost/test.jpg',
      title: 'test'
    }];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });
    wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    // Chech that <p> does not exist
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
