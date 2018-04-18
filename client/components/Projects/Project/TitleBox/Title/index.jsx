import React from 'react';
import apply from 'applystyles';
import animator from 'react-css-in-js-animator';

import style from './style';

export default class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadein: false
    };
    this.fadeInAnimation = this.fadeInAnimation.bind(this);
  }

  fadeInAnimation() {
    let keyframe1 = new animator.keyframe({fadein: true}, 0);
    let keyframe2 = new animator.keyframe({fadein: false}, 500);
    let reel = animator.buildReel(this.setState.bind(this), () => {}, keyframe1, keyframe2);
    reel();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.collapsed !== this.props.collapsed) {
      this.fadeInAnimation();
    }
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

    const { fadein } = this.state;

    return (

      <div 
        id="title-block"
        style={
          apply(
            style.title_block,
            mobileToggle && style.title_block_mobile_landscape,
            orientationFlag && style.title_block_mobile_portrait,
            collapsed && style.title_block_collapsed,
            (collapsed && mobileToggle) && style.title_block_collapsed_mobile_landscape,
            (collapsed && orientationFlag) && style.title_block_collapsed_mobile_portrait
          )
        }
      >
        <div
          id="title-text"
          style={
            apply(
              style.title_text,
              collapsed && style.title_text_collapsed,
              fadein && style.title_text_fadein
            )
          }
        >
          {project.title}
        </div>
      </div>

    ); 

  }
}