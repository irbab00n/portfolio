import React from 'react';

import NavLink from './NavLink.jsx';

import style from '../navbarStyle';

import scrollEffects from '../../../helpers/scrollEffects';

const LinkRow = (props) => (

  <div style={style.navigation_body}>
    <NavLink name={'Resume'} onClick={() => { scrollEffects.linear(props.yOffset, 450) }}/>
    <NavLink name={'Projects'} onClick={() => { scrollEffects.accelerate(props.yOffset, 1000) }}/>
    <NavLink name={'Blog'} onClick={() => { scrollEffects.accelerate(props.yOffset, 2000) }}/>
  </div>

);

export default LinkRow;


// WIll have to add a conditional check in here to check the target and the current offset to determine the correct scrolling effect to use
