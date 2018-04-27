import React from 'react';
import apply from 'applystyles';

import Project from './Project/index.jsx';

import projectsList from './projectsList';

import style from './style';

// will serve as the container view, and contain the list of projects

class Projects extends React.Component {
  constructor(props) {
    super(props);
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
        id="projects-body"
        style={style.body}> 


        <div 
          style={
            apply(
              style.title_container,
              mobileToggle && style.title_container_mobile
            )
          }
        >
          <span 
            style={
              apply(
                style.title_text,
                mobileToggle && style.title_text_mobile_landscape,
                orientationFlag && style.title_text_mobile_portrait
              )
            }
          >
            MY PROJECTS
          </span>
        </div>
        {
          Object.keys(projectsList).map((key, index) => {
            return (
              <Project 
                key={`project${index}`}
                number={index}
                project={projectsList[key]}
                screenWidth={screenWidth}
                screenHeight={screenHeight}
                mobileToggle={mobileToggle}
                orientationFlag={orientationFlag}
                yOffset={yOffset}
              />
            );
          })
        }
      </div>

    );

  }
}

export default Projects;