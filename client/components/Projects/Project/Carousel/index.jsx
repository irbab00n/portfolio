import React from 'react';
import apply from 'applystyles';
import animator from 'react-css-in-js-animator';

import style from './style';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      transition: false,
      leftHover: false,
      rightHover: false,
      fadein: false
    };
    this.advanceIndex = this.advanceIndex.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
    this.transitionAnimation = this.transitionAnimation.bind(this);
    this.fadeInAnimation = this.fadeInAnimation.bind(this);
  }

  advanceIndex(action) {
    let { currentIndex } = this.state;
    let { project } = this.props;
    switch(action) {
      case 'decrement':
        if (currentIndex === 0) {
          this.setState({
            currentIndex: project.pictures.length - 1
          }, () => {this.transitionAnimation()});
        } else {
          this.setState({
            currentIndex: currentIndex - 1
          }, () => {this.transitionAnimation()});
        }
        break;
      case 'increment':
        if (currentIndex === project.pictures.length - 1) {
          this.setState({
            currentIndex: 0
          }, () => {this.transitionAnimation()});
        } else {
          this.setState({
            currentIndex: currentIndex + 1
          }, () => {this.transitionAnimation()});
        }
    }
  }

  toggleHover(side, state) {
    let toggle = state === 'on';
    switch(side) {
      case 'left':
        this.setState({
          leftHover: toggle
        });
        break;
      case 'right': 
        this.setState({
          rightHover: toggle
        });
        break;
    }

  }

  transitionAnimation() {
    let keyframe1 = new animator.keyframe({transition: true}, 0);
    let keyframe2 = new animator.keyframe({transition: false}, 100);
    let reel = animator.buildReel(this.setState.bind(this), () => {}, keyframe1, keyframe2);
    reel();
  }

  fadeInAnimation() {
    let keyframe1 = new animator.keyframe({fadein: true}, 0);
    let keyframe2 = new animator.keyframe({fadein: false}, 500);
    let reel = animator.buildReel(this.setState.bind(this), () => {}, keyframe1, keyframe2);
    reel();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.collapsed !== this.props.collapsed || nextProps.orientationFlag !== this.props.orientationFlag) {
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

    const { 
      currentIndex, 
      transition,
      leftHover,
      rightHover,
      fadein
    } = this.state;

    return (

      <div
        id="carousel-body"
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

        <div
          id="carousel-track"
          style={
            style.carousel_track
          }
        >

          <div
            id="track-left"
            style={
              apply(
                style.track_side,
                leftHover && style.track_side_hover,
                fadein && style.track_side_fadein
              )
            }
            onClick={mobileToggle ? () => {} : () => {this.advanceIndex('decrement')}}
            onTouchEnd={() => {this.advanceIndex('decrement')}}
            onMouseEnter={() => {this.toggleHover('left', 'on')}}
            onMouseLeave={() => {this.toggleHover('left', 'off')}}
          >

            {
              currentIndex === 0 ?
                null :
                <img 
                  src={project.pictures[currentIndex - 1].link}
                  style={
                    apply(
                      style.carousel_image,
                      fadein && style.carousel_image_transition
                    )
                  }
                />
            }
          </div>

          <div
            id="track-current"
            style={
              style.track_current
            }
          >

            <img 
              src={project.pictures[currentIndex].link}
              style={
                apply(
                  style.carousel_image,
                  transition && style.carousel_image_transition,
                  fadein && style.carousel_image_transition
                )
              }
            />

          </div>

          <div
            id="track-right"
            style={
              apply(
                style.track_side,
                rightHover && style.track_side_hover
              )
            }
            onClick={mobileToggle ? () => {} : () => {this.advanceIndex('increment')}}
            onTouchEnd={() => {this.advanceIndex('increment')}}
            onMouseEnter={() => {this.toggleHover('right', 'on')}}
            onMouseLeave={() => {this.toggleHover('right', 'off')}}
          >
            {
              currentIndex === project.pictures.length - 1 ?
                null :
                <img 
                  src={project.pictures[currentIndex + 1].link}
                  style={
                    apply(
                      style.carousel_image,
                      fadein && style.carousel_image_transition
                    )
                  }
                />
            }
          </div>

        </div>

      </div>

    );

  }
}















