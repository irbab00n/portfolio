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
      yOffset
    } = this.props;

    // Mobile toggle is the value that will change between desktop and mobile component
    // orientation flag will be the deciding boolean to display for portrait/landscape usage

    return (

      mobileToggle
        ? <MobileView
            mobileToggle={mobileToggle}
            orientationFlag={orientationFlag}
            yOffset={yOffset}
          />
        : <DesktopView />

    );

  }
}

export default Resume;