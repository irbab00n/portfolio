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
          style={
            apply(
              {marginTop: '1%', display: 'flex', flexDirection: 'column', alignItems: 'center'},
              mobileToggle && {marginBottom: '1%', flexDirection: 'row'},
              orientationFlag && {marginTop: '2%', flexDirection: 'column'},
              collapsed && {flexDirection: 'column'},
              (collapsed && mobileToggle) && {marginTop: '2%'}
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
                (collapsed && orientationFlag) && style.title_text_mobile_portrait_collapsed,
                fadein && style.title_text_fadein
              )
            }
          >

            <span 
              style={
                apply(
                  {marginLeft: '5%'},
                  mobileToggle && {marginLeft: '10%'},
                  orientationFlag && {marginLeft: '5%'},
                  (collapsed && mobileToggle) && {marginLeft: '5%'},
                )
              }
            >
              {project.title}
            </span>

          </div>


          <div
            id="project-links"
            style={
              apply(
                {margin: '2% 0', width: '100%', display: 'flex', flexDirection: 'column'},
                mobileToggle && {margin: '0 0'},
                orientationFlag && {margin: '4% 0'},
                (collapsed && mobileToggle) && {margin: '4% 0'}
              )
            }
          >

            {/* Project Deploy Link */}
            
            <a
              id="title-link"
              href={project.link}
              style={
                apply(
                  {textDecoration: 'none', width: '100%'}
                )
              }
            >
              <div
                id="link-container"
                style={
                  apply(
                    {marginLeft: '5%', fontSize: '90%', color: 'rgba(35, 35, 135, 1.0)', WebkitTransition: '0.5s', textDecoration: 'none', display: 'flex', flexDirection: 'row', alignItems: 'center'},
                    mobileToggle && {fontSize: '100%'},
                    orientationFlag && {fontSize: '160%'},
                    collapsed && {fontSize: '80%'},
                    (collapsed && mobileToggle) && {},
                    (collapsed && orientationFlag) && {fontSize: '160%'},
                    fadein && {color: 'rgba(35, 35, 35, 0.0)', WebkitTransition: 'none'}
                  )
              }>
                <svg 
                  fill={fadein ? "rgba(35, 35, 35, 0.0)" : "rgba(35, 35, 35, 0.6)"}
                  height={orientationFlag ? "48" : "32"}
                  width={orientationFlag ? "48" : "32"}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                </svg>
                <span style={{marginLeft: '2%'}}>{project.link}</span>

              </div>
            </a>

            {/* Github Link */}

            <a
              id="github-link"
              href={project.repo}
              style={
                apply(
                  {textDecoration: 'none', width: '100%'}
                )
              }
            >
              <div
                id="link-container"
                style={
                  apply(
                    {marginLeft: '5%', fontSize: '90%', color: 'rgba(35, 35, 135, 1.0)', WebkitTransition: '0.5s', textDecoration: 'none', display: 'flex', flexDirection: 'row', alignItems: 'center'},
                    mobileToggle && {fontSize: '100%'},
                    orientationFlag && {fontSize: '160%'},
                    collapsed && {fontSize: '80%'},
                    (collapsed && mobileToggle) && {},
                    (collapsed && orientationFlag) && {fontSize: '160%'},
                    fadein && {color: 'rgba(35, 35, 35, 0.0)', WebkitTransition: 'none'}
                  )
              }>
                <svg 
                  fill={fadein ? "rgba(35, 35, 35, 0.0)" : "rgba(35, 35, 35, 0.6)"}
                  height={orientationFlag ? "48" : "32"}
                  width={orientationFlag ? "48" : "32"}
                  aria-labelledby="simpleicons-github-icon" 
                  role="img"
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg">
                  <title id="simpleicons-github-icon">GitHub icon</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                <span style={{marginLeft: '2%'}}>{project.repo}</span>
              </div>
            </a>
          </div>
        </div>


        {/* Overview Text */}
        <div
          id="overview-text"
          style={
            apply(
              style.overview_text,
              mobileToggle && {fontSize: '90%'},
              orientationFlag && {marginTop: '0%', fontSize: '160%'},
              collapsed && {fontSize: '70%'},
              (collapsed && mobileToggle) && {},
              (collapsed && orientationFlag) && {fontSize: '160%'},
              fadein && style.overview_text_fadein
            )
          }
        >
          <span style={{marginLeft: '5%', width: '90%'}}>{project.overview}</span>
        </div>
        {/* Contributors Label */}
        <div
          id="contributors-label"
          style={
            apply(
              {marginTop: '1%'}
            )
          }
        >
          <span 
            style={
              apply(
                {marginLeft: '5%', width: '90%', fontSize: '100%', fontWeight: 'bold', color: 'rgba(35, 35, 35, 1.0)', WebkitTransition: '0.5s'},
                orientationFlag && {fontSize: '160%'},
                fadein && {color: 'rgba(35, 35, 35, 0.0)', WebkitTransition: 'none'}
              )
            }
          >
            Contributors:
          </span>
        </div>
        {/* Contributors List */}
        <ul 
          id="contributor-list"
          style={
            apply(
              {margin: 'auto 5%', padding: '0 5%', WebkitTransition: '0.5s'},
              mobileToggle && {},
              orientationFlag && {margin: '2% 5%'},
              collapsed && {margin: '2% 0 2% 5%'}
            )
          }
        >
          {
            project.contributors.map((contributor, index) => {
              return (
                <li 
                  key={`contrib-${index}`}
                  style={
                    apply(
                      {margin: '0', fontSize: '80%', color: 'rgba(35, 35, 35, 0.8)', WebkitTransition: '0.5s', display: 'inline-block'},
                      mobileToggle && {color: 'rgba(35, 35, 35, 1.0)', display: 'inline-block'},
                      orientationFlag && {fontSize: '160%', display: 'block'},
                      collapsed && {fontSize: '80%', display: 'block'},
                      (collapsed && mobileToggle) && {fontSize: '80%', display: 'block'},
                      (collapsed && orientationFlag) && {fontSize: '160%'},
                      fadein && {color: 'rgba(35, 35, 35, 0.0)', WebkitTransition: 'none'}
                    )
                  }
                >
                  {contributor}
                </li>
              );
            })
          }
        </ul>
      </div>

    ); 

  }
}
