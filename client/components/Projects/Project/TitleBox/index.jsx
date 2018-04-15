import React from 'react';
import apply from 'applystyles';

import Title from './Title/index.jsx';
import Description from './Description/index.jsx';

import style from './style';

export default class TitleBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const {
      collapsed,
      project,
      screenWidth,
      screenHeight,
      mobileToggle,
      orientationFlag,
      yOffset
    } = this.props;

    return (

      <div
        id="title-box"
        style={
          apply(
            {height: '30%'},
            style.container_body,
            collapsed && style.container_body_collapsed,
            {backgroundColor: 'rgba(210, 210, 210, 1.0)'}
          )
        }
      >

        <Title 
          collapsed={collapsed}
          project={project}
          screenWidth={screenWidth}
          screenHeight={screenHeight}
          mobileToggle={mobileToggle}
          orientationFlag={orientationFlag}
          yOffset={yOffset}
        />


        <Description 
          collapsed={collapsed}
          project={project}
          screenWidth={screenWidth}
          screenHeight={screenHeight}
          mobileToggle={mobileToggle}
          orientationFlag={orientationFlag}
          yOffset={yOffset}
        />


      </div>
    );

  }
};

/*

Project Title Block
  Project Title Label
  Project Title

Deployment Link

Project Description Label
Project Description


Project Contributors Label
List of Contributors
  Contributor

*/