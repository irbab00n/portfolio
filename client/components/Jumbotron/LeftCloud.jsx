import React from 'react';

import applyStyles from '../../helpers/applyStyles';

import style from './style';

const LeftCloud = (props) => (

  <div style={applyStyles(style.leftCloud, {left: `${-250 -(props.yOffset * 1.11)}px`})}>
    <img src='https://s3-us-west-1.amazonaws.com/cos-bytes.com/cloud1.png'/>
  </div>

);

export default LeftCloud;