import React from 'react';
import apply from 'applystyles';

import style from './style';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    this.advanceIndex = this.advanceIndex.bind(this);
  }

  advanceIndex(action) {
    let { currentIndex } = this.state;
    let { project } = this.props;
    switch(action) {
      case 'decrement':
        if (currentIndex === 0) {
          this.setState({
            currentIndex: project.pictures.length - 1
          });
        } else {
          this.setState({
            currentIndex: currentIndex - 1
          });
        }
        break;
      case 'increment':
        if (currentIndex === project.pictures.length - 1) {
          this.setState({
            currentIndex: 0
          });
        } else {
          this.setState({
            currentIndex: currentIndex + 1
          });
        }
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

    const { currentIndex } = this.state;

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
              style.track_left
            }
            onClick={() => {this.advanceIndex('decrement')}}
          >
            {
              currentIndex === 0 ?
                null :
                <img 
                  src={project.pictures[currentIndex - 1].link}
                  style={{
                    display: 'block',
                    overflow: 'hidden',
                    objectFit: 'scale-down',
                    width: '100%',
                    height: 'auto',
                    WebkitUserSelect: 'none',
                    khtmlUserSelect: 'none',
                    MozUserSelect: 'none',
                    OUserSelect: 'none',
                    userSelect: 'none'
                  }}
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
              style={{
                display: 'block',
                objectFit: 'scale-down',
                width: '100%',
                height: 'auto',
                WebkitUserSelect: 'none',
                khtmlUserSelect: 'none',
                MozUserSelect: 'none',
                OUserSelect: 'none',
                userSelect: 'none'
              }}
            />

          </div>

          <div
            id="track-right"
            style={
              style.track_right
            }
            onClick={() => {this.advanceIndex('increment')}}
          >
            {
              currentIndex === project.pictures.length - 1 ?
                null :
                <img 
                  src={project.pictures[currentIndex + 1].link}
                  style={{
                    display: 'block',
                    overflow: 'hidden',
                    objectFit: 'scale-down',
                    width: '100%',
                    height: 'auto',
                    WebkitUserSelect: 'none',
                    khtmlUserSelect: 'none',
                    MozUserSelect: 'none',
                    OUserSelect: 'none',
                    userSelect: 'none'
                  }}
                />
            }
          </div>

        </div>

      </div>

    );

  }
}


/*

For the list of pictures:

we want 1 general container that will hold lists of 5 pictures.  

So if we pass in 7 pictures, we're going to need to split the pictures into lists

we will need to know how many lists need to be created

we will need to know how far the current offset is

if we click next, and the next set isn't full, we want to know how much we need to adjust the overall offset of the track by

  To do this, we need to know the following:

    - Size of the uniform slide width
    - Size of the margin

*/














