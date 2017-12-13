import React from 'react';

import LinkColumn from './LinkColumn.jsx';
import DisplayBox from './DisplayBox.jsx';

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
    this.setState({
      currentSlide: slide
    });
  }

  render() {

    const { currentSlide } = this.state;
    const { yOffset } = this.props;

    return (

      <div style={
        applyStyles(
          style.desktopBody,
          yOffset >= 425 && {backgroundColor: 'rgba(250, 250, 250, 1.0)'}
        )
      }>

        <div>
          <img 
            src='https://s3-us-west-1.amazonaws.com/cos-bytes.com/me.jpg'
            style={{height: '300px', padding: '25px 25px 25px 50px'}}
          />
          <div style={{
            height: '30px',
            padding: '25px 25px 25px 50px'
          }}>
            <center>Thomas Cosby</center>
          </div>
        </div>

        <LinkColumn 
          changeSlides={this.changeSlides}
        />

        <DisplayBox 
          currentSlide={currentSlide}
        />

      </div>

    );

  }
}

export default DesktopView;