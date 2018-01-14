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

    const { yOffset } = this.props;

    return (

      <div style={style.navigation_body}>
        <NavLink name={'About Me'} onClick={animationChooser(yOffset, 440 , scrollEffects)}/>
        <NavLink name={'Projects'} onClick={animationChooser(yOffset, 927, scrollEffects)}/>
        <NavLink name={'Blog'} onClick={animationChooser(yOffset, 1962, scrollEffects)}/>
      </div>

    );
  }
}

export default LinkRow;