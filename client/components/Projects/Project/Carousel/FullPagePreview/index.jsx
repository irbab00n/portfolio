import React from 'react';
import apply from 'applystyles';
import animator from 'react-css-in-js-animator';

import style from './style';

export default class FullPageReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadein: true
    };
    this.fadeInAnimation = this.fadeInAnimation.bind(this);
  }

  componentWillMount() {
    function preventDefault(e) {
      e = e || window.event;
      if (e.preventDefault) {
        e.preventDefault();
      }
      e.returnValue = false;  
    }
    window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault;
    window.onmousewheel = document.onmousewheel = preventDefault;
    window.ontouchmove  = preventDefault;
  }

  componentDidMount() {
    this.setState({
      fadein: false
    });
  }

  componentWillUnmount() {
    function restoreDefault(e) {
      e = e || window.event;
      e.returnValue = true;
    }
    window.addEventListener('DOMMouseScroll', restoreDefault, false);
    window.onwheel = restoreDefault;
    window.onmousewheel = document.onmousewheel = restoreDefault;
    window.ontouchmove  = restoreDefault;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.collapsed !== this.props.collapsed || nextProps.orientationFlag !== this.props.orientationFlag) {
      this.fadeInAnimation();
    }
  }

  fadeInAnimation() {
    let keyframe1 = new animator.keyframe({fadein: true}, 0);
    let keyframe2 = new animator.keyframe({fadein: false}, 500);
    let reel = animator.buildReel(this.setState.bind(this), () => {}, keyframe1, keyframe2);
    reel();
  }

  render() {

    const { 
      togglePreview,
      picture,
      collapsed,
      screenWidth,
      screenHeight,
      mobileToggle,
      orientationFlag,
      yOffset
    } = this.props;

    const { fadein } = this.state;

    return (

      <div
        style={
          apply(
            style.full_page_preview_body
          )
        }
        onClick={() => {togglePreview('off')}}
      > 
        <div
          id="image-container"
          style={
            apply(
              style.image_container,
              orientationFlag && style.image_container_mobile_portait
            )
          }
        >
          <img 
            src={picture.link || ''}
            style={
              apply(
                style.image,
                orientationFlag && style.image_mobile_portait,
                fadein && style.image_fadein
              )
            }
          />
        </div>

        <div
          id="description-container"
          style={
            apply(
              style.description_container,
              fadein && style.description_container_fadein
            )
          }
        >
          <center>{picture.description || ''}</center>
        </div>
      </div>

    );

  }
}