import React from 'react';

import NavLink from './NavLink.jsx';

import style from '../navbarStyle';

import calculateDistanceToTarget from '../../../helpers/calculateDistanceToTarget';
import animationChooser from '../../../helpers/animationChooser';
import scrollEffects from '../../../helpers/scrollEffects';

class LinkRow extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    const { yOffset } = this.props;

    return (

      <div style={style.navigation_body}>
        <NavLink name={'Resume'} onClick={animationChooser(yOffset, 440, calculateDistanceToTarget, scrollEffects)}/>
        <NavLink name={'Projects'} onClick={animationChooser(yOffset, 1000, calculateDistanceToTarget, scrollEffects)}/>
        <NavLink name={'Blog'} onClick={animationChooser(yOffset, 2000, calculateDistanceToTarget, scrollEffects)}/>
      </div>

    );
  }
}

export default LinkRow;


// WIll have to add a conditional check in here to check the target and the current offset to determine the correct scrolling effect to use
