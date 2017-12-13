import React from 'react';

import LinkColumn from './LinkColumn.jsx';
import DisplayBox from './DisplayBox.jsx';


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

    return (

      <div style={{
        height: '500px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(128, 128, 128, 1.0)'
      }}>

        <div>
          <img 
            src='https://s3-us-west-1.amazonaws.com/cos-bytes.com/me.jpg'
            style={{height: '300px', padding: '25px 25px 25px 50px'}}
          />
          <div>
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