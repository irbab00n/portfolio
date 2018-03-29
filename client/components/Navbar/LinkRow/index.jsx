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
        <NavLink name={'About Me'} onClick={animationChooser(yOffset, targets.desktop.block2.start + 10 , scrollEffects)}/>
        <NavLink name={'Projects'} onClick={animationChooser(yOffset, targets.desktop.block3.start + 10, scrollEffects)}/>
        <a
          style={{color: 'rgba(0, 122, 193, 1.0)', textDecoration: 'none'}}
          href="https://s3-us-west-1.amazonaws.com/cos-bytes.com/resume.pdf" 
          target="_blank"
        >
          <NavLink name={'Resume'} onClick={() => {}}/>
        </a>
      </div>

    );
  }
}

export default LinkRow;

// This is where we're going to have to add in the functionality to change depending on the mobileToggle