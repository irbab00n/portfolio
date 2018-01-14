import React from 'react';
import apply from 'applystyles';

import style from './style';

const Title = (props) => {

  const { mobileToggle, orientationFlag } = props;

  return (
    <span
      onClick={() => {props.onClick()}}
      style={
        apply(
          style.title,
          (mobileToggle && orientationFlag) && style.title_mobile
        )
      }
    >
      COS
      <span
        onClick={() => {props.onClick()}}
        style={
          apply(
            style.title_blue
          )
        }
      >
        -BYTES
      </span>
    </span>
  )
};

export default Title;

// Must adjust the padding to 6px to add a bit of an edge for a user to click on
// refactor current style from padding left to margin left