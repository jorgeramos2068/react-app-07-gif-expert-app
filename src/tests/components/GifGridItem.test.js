import React from 'react';
import {shallow} from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Tests for <GifGridItem />', () => {
  let wrapper;
  const title = 'Test title';
  const url = 'http://localhost/test.png'

  beforeEach(() => {
    wrapper = shallow(<GifGridItem title={title} url={url} />);
  });

  test('Should show <GifGridItem /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should display a <p> with title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('Should display an image with url and alt', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('Should contain animate classes', () => {
    const containerDiv = wrapper.find('div');
    expect(containerDiv.prop('className').includes('animate__fadeIn')).toBe(true);
  });
});
