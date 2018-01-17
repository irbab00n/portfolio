import React from 'react';
import apply from 'applystyles';
import animator from 'react-css-in-js-animator';

import style from './style';


class CurrentImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true,
      shakeLeft: false,
      shakeRight: false
    };
    this.shakeAnimation = this.shakeAnimation.bind(this);
  }

  shakeAnimation() {
    let keyframe1 = new animator.keyframe({shakeLeft: true}, 0);
    let keyframe2 = new animator.keyframe({shakeLeft: false, shakeRight: true}, 100);
    let keyframe3 = new animator.keyframe({shakeRight: false}, 100);
    let reel = animator.buildReel(this.setState.bind(this), () => {}, keyframe1, keyframe2, keyframe3);
    reel();
  }

  render() {

    const { shakeLeft, shakeRight } = this.state;
    const { loaded, image } = this.props;

    return (

      <div 
        style={
          apply(
            style.currentImageBody,
            shakeLeft && style.currentImageBody_shakeLeft,
            shakeRight && style.currentImageBody_shakeRight
          )
        }
        onClick={this.shakeAnimation}
      >
        <img 
          src={image} 
          style={
            apply(
              style.currentImage,
              loaded && style.currentImage_loaded,
              shakeLeft && style.currentImage_shakeLeft,
              shakeRight && style.currentImage_shakeRight
            )
          }
        />
      </div>

    );
  }

}

export default CurrentImage;