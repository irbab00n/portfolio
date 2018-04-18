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
            style.carousel_body,
            mobileToggle && style.carousel_body_mobile_landscape,
            orientationFlag && style.carousel_body_mobile_portrait,
            collapsed && style.carousel_body_collapsed,
            (collapsed && mobileToggle) && style.carousel_body_collapsed_mobile_landscape,
            (collapsed && orientationFlag) && style.carousel_body_collapsed_mobile_portrait
          )
        }
      >
        Carousel
      </div>

    );

  }
}