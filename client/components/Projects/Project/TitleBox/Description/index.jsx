import React from 'react';
import apply from 'applystyles';
import animator from 'react-css-in-js-animator';

import style from './style';

export default class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: false
    };
    this.fadeInAnimation = this.fadeInAnimation.bind(this);
  }

  fadeInAnimation() {
    let keyframe1 = new animator.keyframe({fadeIn: true}, 0);
    let keyframe2 = new animator.keyframe({fadeIn: false}, 500);
    let reel = animator.buildReel(this.setState.bind(this), () => {}, keyframe1, keyframe2);
    reel();
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.collapsed && this.props.collapsed || nextProps.orientationFlag !== this.props.orientationFlag) {
      this.fadeInAnimation();
    }
  }

  shouldComponentUpdate(nextProps, prevState) {
    if (nextProps.collapsed !== this.props.collapsed || nextProps.orientationFlag !== this.props.orientationFlag || prevState.fadeIn !== this.state.fadeIn) {
      return true
    } else {
      return false;
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

    const { fadeIn } = this.state;

    return (

      <div 
        id="description-box"
        style={
          apply(
            style.description_block,
            mobileToggle && style.description_block_mobile_landscape,
            orientationFlag && style.description_block_mobile_portrait,
            collapsed && style.description_block_collapsed,
            (collapsed && mobileToggle) && style.description_block_collapsed_mobile_landscape,
            (collapsed && orientationFlag) && style.description_block_collapsed_mobile_portrait
          )
        }
      >
        <div
          id="description-text"
          style={
            apply(
              style.description_text,
              fadeIn && style.description_text_fadein,
              mobileToggle && style.description_text_mobile_landscape,
              orientationFlag && style.description_text_mobile_portrait,
              collapsed && style.description_text_collapsed,
              (collapsed && mobileToggle) && style.description_text_collapsed_mobile_landscape,
              (collapsed && orientationFlag) && style.description_text_collapsed_mobile_portrait
            )
          }
        >
          {project.description}
        </div>
      </div>

    );

  }
}