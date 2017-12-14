import React from 'react';


class SkillsSlide extends React.Component {
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
        <center>This is the Skills Slide.  This slide will display when the Skills Tab is clicked</center>
      </div>

    ); 

  }
}

export default SkillsSlide;