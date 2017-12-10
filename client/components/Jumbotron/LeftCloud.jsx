import React from 'react';

import applyStyles from '../../helpers/applyStyles';

import style from './style';

const LeftCloud = (props) => (

  <div style={applyStyles(style.leftCloud, {marginLeft: `${-(props.yOffset * 1.11)}px`})}>
    <img src='https://reclay-group.com/de/images/header/stage_cloud_2.png'/>
  </div>

);

export default LeftCloud;