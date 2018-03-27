import React from 'react';

import ResumeBody from './ResumeBody/index.jsx';

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
    } = this.props;

    return (

      <ResumeBody 
        mobileToggle={mobileToggle}
        screenWidth={screenWidth}
        screenHeight={screenHeight}
        yOffset={yOffset}
      />

    );

  }
}

export default Resume;