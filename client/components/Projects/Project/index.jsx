import React from 'react';
import apply from 'applystyles';

import style from './style';

export default class ProjectsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const {
      screenWidth,
      screenHeight,
      mobileToggle,
      orientationFlag,
      yOffset
    } = this.props;

    return (

      <div 
        style={
          apply(
            style.list_body,
            mobileToggle && style.list_body_mobile
          )
        }
      >
        Project
      </div>

    );

  }
};