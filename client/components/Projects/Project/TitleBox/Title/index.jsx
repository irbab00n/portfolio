import React from 'react';
import apply from 'applystyles';

import style from './style';

export default class Title extends React.Component {
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
        id="left-side"
        style={
          apply(
            style.title_block,
            mobileToggle && style.title_block_mobile_landscape,
            orientationFlag && style.title_block_mobile_portrait,
            collapsed && style.title_block_collapsed
          )
        }
      >
        <div
          style={
            apply(
              style.title_text,
              collapsed && style.title_text_collapsed
            )
          }
        >
          {project.title}
        </div>
      </div>

    ); 

  }
}