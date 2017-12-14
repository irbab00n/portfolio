import React from 'react';


class EducationSlide extends React.Component {
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
        <center>This is the Education Slide.  This slide will display when the Education Tab is clicked</center>
      </div>

    ); 

  }
}

export default EducationSlide;