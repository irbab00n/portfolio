import React from 'react';
import apply from 'applystyles';
import animator from 'react-css-in-js-animator';

import RightReturn from './RightReturn.jsx';

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

  advanceIndex(e, action) {
    e.preventDefault();
    let { currentIndex } = this.state;
    let { project } = this.props;
    if (project.pictures.length <= 1) {
      return;
    }
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

  toggleHover(side, state, cb) {
    let callback = cb || new Function();
    let toggle = state === 'on';
    switch(side) {
      case 'left':
        this.setState({
          leftHover: toggle
        }, callback);
        break;
      case 'right': 
        this.setState({
          rightHover: toggle
        }, callback);
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
            onClick={mobileToggle ? () => {} : (e) => {this.advanceIndex(e, 'decrement')}}
            onTouchStart={() => {() => {this.toggleHover('left', 'on')}}}
            onTouchEnd={(e) => {
              this.toggleHover('left', 'off', () => {this.advanceIndex(e, 'decrement')});
            }}
            onMouseEnter={() => {this.toggleHover('left', 'on')}}
            onMouseLeave={() => {this.toggleHover('left', 'off')}}
          >

            {
              currentIndex === 0 ?
                null :
                <img 
                  src={project.pictures[currentIndex - 1].link || ''}
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
              src={project.pictures[currentIndex].link || ''}
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
            onClick={mobileToggle ? () => {} : (e) => {this.advanceIndex(e, 'increment')}}
            onTouchStart={() => {() => {this.toggleHover('right', 'on')}}}
            onTouchEnd={(e) => {
              this.toggleHover('right', 'off', () => {this.advanceIndex(e, 'increment')});
            }}
            onMouseEnter={() => {this.toggleHover('right', 'on')}}
            onMouseLeave={() => {this.toggleHover('right', 'off')}}
          >
            {
              currentIndex === project.pictures.length - 1 && project.pictures.length > 1 ?
                <RightReturn /> :
                <img 
                  src={project.pictures.length > 1 ? project.pictures[currentIndex + 1].link : ''}
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















