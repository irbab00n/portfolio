import React from 'react';

import LeftCloud from './LeftCloud.jsx';
import RightCloud from './RightCloud.jsx';
import TextScroller from './TextScroller.jsx';

import applyStyles from '../../helpers/applyStyles';

import style from './style';

class Jumbotron extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {
      screenWidth,
      screenHeight,
      percentScrolled,
      mobileToggle,
      orientationFlag,
      yOffset
    } = this.props;

    return (

      <div style={
        applyStyles(
          style.body,
          {color: `rgba(41, 67, 78, ${(1 - (percentScrolled / 7))})`},
          mobileToggle && style.body_mobile_landscape,
          (mobileToggle && orientationFlag) && style.body_mobile_portrait
        )
      }>

        <RightCloud
          mobileToggle={mobileToggle}
          orientationFlag={orientationFlag}
          yOffset={yOffset}
        />

        <TextScroller
          percentScrolled={percentScrolled}
        />

        <LeftCloud
          mobileToggle={mobileToggle}
          orientationFlag={orientationFlag}
          yOffset={yOffset}
        />

      </div>

    );

  }
}

export default Jumbotron;