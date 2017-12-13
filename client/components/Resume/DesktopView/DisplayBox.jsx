import React from 'react';

import Slide from './Slide.jsx';


class DisplayBox extends React.Component {
  constructor(props) {
    super(props);
    this.renderSlide = this.renderSlide.bind(this);
  }

  renderSlide(slide) {
    switch(slide) {
      case 'skills':
        return (
          <Slide 
            name={'Skills'}
          />
        );
      case 'experience':
        return (
          <Slide 
            name={'Experience'}
          />
        );
      case 'education':
        return (
          <Slide 
            name={'Education'}
          />
        );
      case 'links':
        return (
          <Slide 
            name={'Links'}
          />
        );
      default: 
        return (
          <Slide 
            name={'Default'}
          />
        );
    }
  }

  render() {

    const { currentSlide } = this.props;

    // Let's create a container that will resize dynamically depending on the window innerWidth

    return (

      <div style={{
        height: '450px',
        width: '600px',
        margin: '25px 50px 25px 25px'
      }}>
        {this.renderSlide(currentSlide)}
      </div>

    );

  }
}

export default DisplayBox;