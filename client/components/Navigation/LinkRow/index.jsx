import React from 'react';

import NavLink from './NavLink.jsx';

import style from './style';

import animationChooser from '../../../helpers/animationChooser';
import scrollEffects from '../../../helpers/scrollEffects';

class LinkRow extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    const { yOffset, targets } = this.props;

    return (

      <div style={style.navigation_body}>
        <NavLink name={'About Me'} onClick={animationChooser(yOffset, targets.block2.start , scrollEffects)}/>
        <NavLink name={'Projects'} onClick={animationChooser(yOffset, targets.block3.start, scrollEffects)}/>
        <NavLink name={'Contact'} onClick={animationChooser(yOffset, targets.block4.start, scrollEffects)}/>
      </div>

    );
  }
}

export default LinkRow;