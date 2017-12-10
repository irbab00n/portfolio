import React from 'react';

import applyStyles from '../../helpers/applyStyles';

import style from './style';

const RightCloud = (props) => (

  <div style={applyStyles(style.rightCloud, {marginRight: `${-(props.yOffset * 1.11)}px`})}>
    <img src='http://pngimg.com/uploads/cloud/cloud_PNG24.png?i=1'/>
  </div>

);

export default RightCloud;