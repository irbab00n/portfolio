import React from 'react';

import NavLink from './NavLink.jsx';

import style from '../navbarStyle';

const LinkRow = () => (

  <div style={style.navigation_body}>
    <NavLink name={'Resume'} onClick={() => { console.log('Resume link clicked'); }}/>
    <NavLink name={'Projects'} onClick={() => { console.log('Projects link clicked'); }}/>
    <NavLink name={'Blog'} onClick={() => { console.log('Blog link clicked'); }}/>
  </div>

);

export default LinkRow;