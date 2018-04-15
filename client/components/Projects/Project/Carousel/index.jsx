import React from 'react';
import apply from 'applystyles';

import style from './style';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const {
      collapsed,
      project,
      screenWidth,
      screenHeight,
      mobileToggle,
      orientationFlag,
      yOffset
    } = this.props;

    return (

      <div
        id="carousel-box"
        style={
          apply(
            
          )
        }
      >
        Carousel
      </div>

    );

  }
}