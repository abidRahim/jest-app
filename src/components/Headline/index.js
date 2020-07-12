import React from 'react';

const Headline = ({ header, desc }) => {
  if (!header) {
    return null;
  }

  return (
    <div data-test="HeadlineComponent">
      <h1 data-test="header">{header}</h1>
      <p data-test="desc">
        {desc}
      </p>
    </div>
  )
}

export default Headline;