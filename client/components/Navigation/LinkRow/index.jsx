import React from 'react';

import NavLink from './NavLink.jsx';

import style from './style';

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
        <NavLink name={'Projects'} onClick={animationChooser(yOffset, 927, calculateDistanceToTarget, scrollEffects)}/>
        <NavLink name={'Blog'} onClick={animationChooser(yOffset, 1962, calculateDistanceToTarget, scrollEffects)}/>
      </div>

    );
  }
}

export default LinkRow;