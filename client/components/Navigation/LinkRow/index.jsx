import React from 'react';

import NavLink from './NavLink.jsx';

import style from '../navbarStyle';

import scrollEffects from '../../../helpers/scrollEffects';
import calculateDistanceToTarget from '../../../helpers/calculateDistanceToTarget';

class LinkRow extends React.Component {
  constructor(props){
    super(props);
    this.animate = this.animate.bind(this);
  }

  animate(y, target) {
    let animation = calculateDistanceToTarget(y, target) >= 800 ? scrollEffects.accelerate : scrollEffects.accelerate;
    return () => animation(y, target);
  }

  render() {

    const { yOffset } = this.props;

    return (

      <div style={style.navigation_body}>
        <NavLink name={'Resume'} onClick={this.animate(yOffset, 450)}/>
        <NavLink name={'Projects'} onClick={this.animate(yOffset, 1000)}/>
        <NavLink name={'Blog'} onClick={this.animate(yOffset, 2000)}/>
      </div>

    );
  }
}

export default LinkRow;


// WIll have to add a conditional check in here to check the target and the current offset to determine the correct scrolling effect to use
