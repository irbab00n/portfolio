import React from 'react';
import apply from 'applystyles';

import TitleBox from './TitleBox/index.jsx';
import ToggleStrip from './ToggleStrip/index.jsx';

import style from './style';

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse() {
    let { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed
    });
  }

  render() {

    const {
      collapsed
    } = this.state;

    const {
      project,
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
            mobileToggle && style.list_body_mobile,
            collapsed && style.list_body_collapsed
          )
        }
      >

        <ToggleStrip
          mobileToggle={mobileToggle}
          collapsed={collapsed}
          toggleFunction={this.toggleCollapse}
        />

        <div
          style={
            apply(
              style.project_container,
              collapsed && style.project_container_collapsed
            )
          }
        >
          <TitleBox 
            collapsed={collapsed}
            project={project}
            screenWidth={screenWidth}
            screenHeight={screenHeight}
            mobileToggle={mobileToggle}
            orientationFlag={orientationFlag}
            yOffset={yOffset}
          />
          <div
            id="carousel-box"
            style={
              apply(
                {height: '70%'},
                style.project_content_container,
                collapsed && style.project_content_container_collapsed,
                {backgroundColor: 'rgba(200, 200, 200, 1.0)'}
              )
            }
          >
            Carousel
          </div>
        </div>

      </div>

    );

  }
};