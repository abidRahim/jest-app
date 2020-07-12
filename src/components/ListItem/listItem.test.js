import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './index';
import { findByTestAttr } from '../../utils/index';

const setUp = (props) => {
  const component = shallow(<ListItem {...props} />);
  return component;
};

describe('List Item component', () => {
  describe('Component renders', () => {

    let wrapper;
    beforeEach(() => {
      const props = {
        title: 'Title test',
        desc: 'body test'
      }
      wrapper = setUp(props);
    });

    it('Should render without error', () => {
      const component = findByTestAttr(wrapper, 'listItemComponent');
      expect(component.length).toBe(1);
    });

    it('Should render a title', () => {
      const title = findByTestAttr(wrapper, 'componentTitle');
      expect(title.length).toBe(1);
    });

    it('Should render a desc', () => {
      const component = findByTestAttr(wrapper, 'componentDesc');
      expect(component.length).toBe(1);
    });
  });

  describe('Should Not render', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: 'Test body'
      }
      wrapper = setUp(props);
    });

    it('Component is not rendered', () => {
      const component = findByTestAttr(wrapper, 'listItemComponent');
      expect(component.length).toBe(0);
    });
  });
});

