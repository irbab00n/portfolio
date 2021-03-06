import React from 'react';
import apply from 'applystyles';

import style from './style';

const LeftCloud = (props) => {

  const {
    mobileToggle,
    orientationFlag,
    yOffset
  } = props;

  return (
    <div style={
      apply(
        style.leftCloud,
        {left: `${-200 - yOffset}px`},
        (mobileToggle && orientationFlag) && style.leftCloud_mobile_portrait
      )
    }>
      <img src='https://s3-us-west-1.amazonaws.com/cos-bytes.com/cloud1.png'/>
    </div>
  );
};

export default LeftCloud;