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
              mobileToggle && style.title_text_mobile_landscape,
              orientationFlag && style.title_text_mobile_portrait,
              fadein && style.title_text_fadein
            )
          }
        >
          <span style={{marginLeft: '5%'}}>{project.title}</span>
        </div>



        <a
          id="title-link" 
          href={project.link}
          style={style.title_link}
        >
          <span 
            style={
              apply(
                {marginLeft: '5%', fontSize: '80%', color: 'rgba(35, 35, 35, 1.0)', WebkitTransition: '0.5s'},
                mobileToggle && {},
                orientationFlag && {},
                collapsed && {fontSize: '80%'},
                fadein && {color: 'rgba(35, 35, 35, 0.0)', WebkitTransition: 'none'}
              )
          }>
            {project.link}
          </span>
        </a>



        <div
          id="overview-text"
          style={
            apply(
              style.overview_text,
              fadein && style.overview_text_fadein
            )
          }
        >
          <span style={{marginLeft: '5%', width: '90%'}}>{project.overview}</span>
        </div>



        <div>
          <span style={{marginLeft: '5%', width: '90%', fontSize: '80%'}}>Contributors:</span>
        </div>

        <ul 
          id="contributor-list"
          style={{marginLeft: '5%'}}>
          {
            project.contributors.map((contributor, index) => {
              return <li key={`contrib-${index}`}>{contributor}</li>
            })
          }
        </ul>
      </div>

    ); 

  }
}


// Title
// Link
// Overview
// Contributor Label
// contributor list
