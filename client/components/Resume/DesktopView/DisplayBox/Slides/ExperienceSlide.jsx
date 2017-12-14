import React from 'react';


class ExperienceSlide extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(250, 250, 250)'
      }}>
        <center>This is the Experience Slide.  This slide will display when the Experience Tab is clicked</center>
      </div>

    ); 

  }
}

export default ExperienceSlide;