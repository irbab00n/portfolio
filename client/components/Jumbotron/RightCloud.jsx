import React from 'react';

import applyStyles from '../../helpers/applyStyles';

import style from './style';

const RightCloud = (props) => {

  const {
    screenWidth,
    screenHeight,
    percentScrolled,
    mobileToggle,
    orientationFlag,
    yOffset
  } = props;

  return (
    <div style={
      applyStyles(
        style.rightCloud,
        {right: `${-(yOffset * 1.11)}px`},
        (mobileToggle && orientationFlag) && style.rightCloud_mobile_portrait
      )
    }>
      <img src='https://s3-us-west-1.amazonaws.com/cos-bytes.com/cloud1.png'/>
    </div>
  );
};

export default RightCloud;