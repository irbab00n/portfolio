import React from 'react';
import apply from 'applystyles';

import Skills from './Skills/index.jsx';
import Experience from './Experience/index.jsx';

import style from './style';

class DesktopView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { screenWidth, screenHeight, yOffset } = this.props;

    // let triggeredOn = yOffset >= 285 && yOffset <= 1200;

    return (

      <div style={
        apply(
          style.desktopBody
        )
      }>

        <div style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 1.0)',
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'center',
        }}>
          <div style={{
            height: '100%',
            width: '100%',
            minWidth : '400px',
            maxWidth: '600px',
            backgroundColor: 'rgba(200, 200, 200, 1.0)',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 2
          }}>

            <div>
              <img 
                src="https://s3-us-west-1.amazonaws.com/cos-bytes.com/headshot.jpg"
                style={
                  apply(
                    style.image
                  )
                }
              />
              <div style={{
                height: '30px',
                padding: '25px 25px 25px 50px'
              }}>
                <center>Thomas Cosby</center>
              </div>
            </div>


            <Skills 
              screenWidth={screenWidth}
              screenHeight={screenHeight}
            />

          </div>

          <div style={{
            height: '100%',
            width: '100%',
            minWidth : '600px',
            maxWidth: '1000px',
            backgroundColor: 'rgba(220, 220, 220, 1.0)',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
          }}>
            Container 2
          </div>
        </div>

      </div>

    );

  }
}




// <LinkColumn
//   currentSlide={currentSlide}
//   changeSlides={this.changeSlides}
//   yOffset={yOffset}
//   triggeredOn={triggeredOn}
// />

// <DisplayBox
//   currentSlide={currentSlide}
//   screenWidth={screenWidth}
//   screenHeight={screenHeight}
//   yOffset={yOffset}
//   triggeredOn={triggeredOn}
// />



export default DesktopView;