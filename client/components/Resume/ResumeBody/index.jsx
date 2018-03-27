import React from 'react';
import apply from 'applystyles';

import Skills from './Skills/index.jsx';
import Content from './Content/index.jsx';

import style from './style';

export default class ResumeBody extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { screenWidth, screenHeight, yOffset } = this.props;

    let toggleLeftOff = screenWidth <= 1420;

    return (

      <div style={
        apply(
          style.body
        )
      }>
        <div style={{
          height: '0px',
          position: 'relative',
          top: '200px',
          left: 0
        }}>
          <img src="http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Cloud-PNG-Transparent-Image.png" style={{height: '1500px'}}/>
        </div>


        <Skills 
          screenWidth={screenWidth}
          screenHeight={screenHeight}
        />

        <Content 
          toggleLeftOff={toggleLeftOff}
        />


      </div>

    );

  }
}