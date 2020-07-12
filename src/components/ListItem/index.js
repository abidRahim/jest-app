
import React from 'react';
import './styles.scss';

const ListItem = ({ title, desc }) => {
  if (!title) {
    return null;
  }

  return (
    <div className="list-item" data-test="listItemComponent">
      <h2 data-test="componentTitle">{title}</h2>
      <div data-test="componentDesc">
        {desc}
      </div>
    </div>
  );
}

export default ListItem;
