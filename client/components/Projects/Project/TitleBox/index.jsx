import React from 'react';
import apply from 'applystyles';

import Title from './Title/index.jsx';
import Description from './Description/index.jsx';

import style from './style';

export default class TitleBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderDescription = this.renderDescription.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
  }

  renderDescription() {
    let {
      collapsed,
      project,
      screenWidth,
      screenHeight,
      mobileToggle,
      orientationFlag,
      yOffset
    } = this.props;
    if (!collapsed) {
      return (
        <Description 
          collapsed={collapsed}
          project={project}
          screenWidth={screenWidth}
          screenHeight={screenHeight}
          mobileToggle={mobileToggle}
          orientationFlag={orientationFlag}
          yOffset={yOffset}
        />
      )
    }
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
            style.container_body,
            mobileToggle && style.container_body_mobile_landscape,
            orientationFlag && style.container_body_mobile_portrait,
            collapsed && style.container_body_collapsed,
            (collapsed && mobileToggle) && style.container_body_collapsed_mobile_landscape,
            (collapsed && orientationFlag) && style.container_body_collapsed_mobile_portrait
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


        {this.renderDescription()}


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