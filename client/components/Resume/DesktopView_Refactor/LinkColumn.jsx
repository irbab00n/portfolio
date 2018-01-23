import React from 'react';

import ResumeLink from './ResumeLink.jsx';


class LinkColumn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { currentSlide, changeSlides, triggeredOn } = this.props;

    return (

      <div style={{
        height: '450px',
        width: '200px',
        padding: '25px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'
      }}>
        <ResumeLink 
          name={'Skills'}
          currentSlide={currentSlide}
          triggeredOn={triggeredOn}
          onClick={() => { changeSlides('skills') }}
        />
        <ResumeLink 
          name={'Experience'}
          currentSlide={currentSlide}
          triggeredOn={triggeredOn}
          onClick={() => { changeSlides('experience') }}
        />
        <ResumeLink 
          name={'Education'}
          currentSlide={currentSlide}
          triggeredOn={triggeredOn}
          onClick={() => { changeSlides('education') }}
        />
        <ResumeLink 
          name={'Links'}
          currentSlide={currentSlide}
          triggeredOn={triggeredOn}
          onClick={() => { changeSlides('links') }}
        />
      </div>

    );

  }
}

export default LinkColumn;