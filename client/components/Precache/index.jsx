import React from 'react';

const Precache = (props) => {
  return (
    <span style={{background: `url(${props.image})`}} hidden></span>
  );
};

export default Precache;