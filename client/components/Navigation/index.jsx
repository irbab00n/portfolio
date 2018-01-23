import React from 'react';
import apply from 'applystyles';

import Title from './Title/index.jsx';
import Dropdown from './Dropdown/index.jsx';
import LinkRow from './LinkRow/index.jsx';

import animationChooser from '../../helpers/animationChooser';
import scrollEffects from '../../helpers/scrollEffects';

import style from './style';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.renderOption = this.renderOption.bind(this);
  }

  renderOption(option) {
    const { percentScrolled, yOffset, targets } = this.props;
    switch(option) {
      case 'fadeIn':
        return ([{
          backgroundColor: `rgba(250, 250, 250, ${(percentScrolled / 10).toFixed(1)})`, 
          boxShadow: `0 4px 8px 0 rgba(0, 0, 0, ${(percentScrolled / 100).toFixed(2) >= 0.4 ? 0.4 : (percentScrolled / 100).toFixed(2)})`
        }]);
      case 'sharp':
        return ([
          yOffset >= targets.block1.end && {WebkitTransition: '0.2s', backgroundColor: `rgba(250, 250, 250,${(percentScrolled / 10).toFixed(1)})`}, 
          yOffset >= targets.block1.end && {boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4)'}
        ]);
    }
  }

  render() {

    const {
      screenWidth,
      screenHeight,
      percentScrolled,
      mobileToggle,
      orientationFlag,
      yOffset,
      animationOption,
      targets
    } = this.props;

    return (

      <div style={
        apply(
          style.main,
          ...this.renderOption(animationOption),
          (mobileToggle && orientationFlag) && style.main_mobile
        )
      }>

        <Title
          mobileToggle={mobileToggle}
          orientationFlag={orientationFlag}
          onClick={
            yOffset === 0 
              ? () => {} // True: Stub function, we're at top of page
              : animationChooser(yOffset, 0, scrollEffects) // False: Return dynamic animation
            }
        />
        
        {
          mobileToggle
            ? <Dropdown 
                yOffset={yOffset}
                targets={targets}
                orientationFlag={orientationFlag}
              />
            : <LinkRow 
                yOffset={yOffset}
                targets={targets}
                orientationFlag={orientationFlag}
              />
        }

      </div>

    );

  }
}

export default Navbar;
