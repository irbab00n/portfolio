import React from 'react';

import DesktopView from './DesktopView/index.jsx';
import MobileView from './MobileView/index.jsx';

class Resume extends React.Component {
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
      yOffset,
      applyStyles
    } = this.props;

    return (

      mobileToggle
        ? <MobileView
            mobileToggle={mobileToggle}
            orientationFlag={orientationFlag}
            yOffset={yOffset}
            applyStyles={applyStyles}
          />
        : <DesktopView 
            screenWidth={screenWidth}
            screenHeight={screenHeight}
            yOffset={yOffset}
            applyStyles={applyStyles}
          />

    );

  }
}

export default Resume;