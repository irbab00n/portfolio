import React from 'react';
import apply from 'applystyles';
import animator from 'react-css-in-js-animator';

import style from './style';


class AvailableImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shakeLeft: false,
      shakeRight: false
    };
    this.shakeAnimation = this.shakeAnimation.bind(this);
  }

  shakeAnimation() {
    let frame1 = new animator.keyframe({shakeLeft: true}, 0);
    let frame2 = new animator.keyframe({shakeLeft: false, shakeRight: true}, 100);
    let frame3 = new animator.keyframe({shakeRight: false}, 100);
    let reel = animator.buildReel(this.setState.bind(this), () => {}, frame1, frame2, frame3);
    reel();
  }

  render() {

    const { shakeLeft, shakeRight } = this.state;
    const { loaded, pictures, selectedCarouselIndex, onClick } = this.props;

    return (

      <div style={
        apply(
          style.availableImagesContainer,
          loaded && style.availableImagesContainer_loaded,
          shakeLeft && style.availableImagesContainer_shakeLeft,
          shakeRight && style.availableImagesContainer_shakeRight
        )
      }>
        {
          pictures.map((picture, index) => {
            return (
              <img 
                key={`image${index}`} 
                src={picture.link} 
                style={
                  apply(
                    style.availableImageBody,
                    loaded && style.availableImageBody_loaded,
                    (loaded && index === selectedCarouselIndex) && style.availableImageBody_selected,
                    shakeLeft && style.availableImageBody_shakeLeft,
                    shakeRight && style.availableImageBody_shakeRight
                  )
                }
                onClick={
                  () => {
                    onClick(index);
                    this.shakeAnimation();
                  }
                }
              />
            );
          })
        }
      </div>

    );

  }
}

export default AvailableImages