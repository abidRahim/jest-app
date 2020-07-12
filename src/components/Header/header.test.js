import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAttr } from '../../utils/index'

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
}

describe('Should render Header', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  })

  it('Should render without errors', () => {
    const wrapper = findByTestAttr(component, 'header');
    expect(wrapper.length).toBe(1);
  })

  it('Should render a logo', () => {
    const logo = findByTestAttr(component, 'logo');
    expect(logo.length).toBe(1);
  })
})
