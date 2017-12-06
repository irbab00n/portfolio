import React from 'react';

import Title from './Title/index.jsx';
import Dropdown from './Dropdown/index.jsx';
import LinkRow from './LinkRow/index.jsx';

import applyStyles from '../../helpers/applyStyles';
import animationChooser from '../../helpers/animationChooser';
import calculateDistanceToTarget from '../../helpers/calculateDistanceToTarget';
import scrollEffects from '../../helpers/scrollEffects';

import style from './navbarStyle';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.renderOption = this.renderOption.bind(this);
  }

  renderOption(option) {
    const { percentScrolled, yOffset } = this.props;
    switch(option) {
      case 'fadeIn':
        return ([{
          backgroundColor: `rgba(250, 250, 250, ${(percentScrolled / 10).toFixed(1)})`, 
          boxShadow: `0 4px 8px 0 rgba(0, 0, 0, ${(percentScrolled / 100).toFixed(2) >= 0.4 ? 0.4 : (percentScrolled / 100).toFixed(2)})`
        }]);
      case 'sharp':
        return ([
          yOffset >= 420 && {WebkitTransition: 'ease-in 0.2s', backgroundColor: `rgba(250, 250, 250, ${(percentScrolled / 10).toFixed(1)})`}, 
          yOffset >= 425 && {boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4)'}
        ]);
    }
  }

  render() {

    const { percentScrolled, screenWidth, yOffset, animationOption } = this.props;
    let mobileToggle = screenWidth < 982;

    return (

      <div style={applyStyles(style.main, ...this.renderOption(animationOption))}>

        <Title onClick={animationChooser(yOffset, 0, calculateDistanceToTarget, scrollEffects)}/>
        {
          mobileToggle
            ? <Dropdown />
            : <LinkRow yOffset={yOffset}/>
        }

      </div>

    );

  }
}

export default Navbar;
