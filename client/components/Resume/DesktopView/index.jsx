import React from 'react';

import LinkColumn from './LinkColumn.jsx';
import DisplayBox from './DisplayBox/index.jsx';

import applyStyles from '../../../helpers/applyStyles';

import style from './style';

class DesktopView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: ''
    };
    this.changeSlides = this.changeSlides.bind(this);
  }

  changeSlides(slide) {
    let { currentSlide } = this.state;
    if (slide === currentSlide) {
      slide = '';
    }
    this.setState({
      currentSlide: slide
    });
  }

  render() {

    const { currentSlide } = this.state;
    const { yOffset } = this.props;

    let triggeredOn = yOffset >= 50 && yOffset <= 800;

    return (

      <div style={
        applyStyles(
          style.desktopBody,
          triggeredOn && style.desktopBody_on
        )
      }>

        <div>
          <img 
            src='https://s3-us-west-1.amazonaws.com/cos-bytes.com/me.jpg'
            style={
              applyStyles(
                style.image,
                triggeredOn && style.image_active
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

        <LinkColumn
          currentSlide={currentSlide}
          changeSlides={this.changeSlides}
          yOffset={yOffset}
          triggeredOn={triggeredOn}
        />

        <DisplayBox 
          currentSlide={currentSlide}
          yOffset={yOffset}
          triggeredOn={triggeredOn}
        />

      </div>

    );

  }
}

export default DesktopView;