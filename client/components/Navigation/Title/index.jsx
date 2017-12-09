import React from 'react';

import style from './style';

const Title = (props) => (

  <span 
    onClick={() => {props.onClick()}}
    style={style.title_left}
  >
    COS
    <span style={style.title_right}>-BYTES</span>
  </span>

);

export default Title;

// Must adjust the padding to 6px to add a bit of an edge for a user to click on
// refactor current style from padding left to margin left