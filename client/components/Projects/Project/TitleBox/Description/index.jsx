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

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps);
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
        id="description-box"
        style={
          apply(
            style.description_block,
            collapsed && style.description_block_collapsed
          )
        }
      >
        <div
          style={
            apply(
              style.description_text
            )
          }
        >
          {project.description}
        </div>
      </div>

    );

  }
}