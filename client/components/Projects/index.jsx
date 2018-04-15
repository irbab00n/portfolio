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

  componentDidMount() {
    console.log(document.getElementById('projects-body').getBoundingClientRect().top);
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


        <div 
          style={
            apply(
              style.description_container,
              mobileToggle && style.description_container_mobile,
            )
          }
        >
          <p style={
            apply(
              style.description_text,
              mobileToggle && style.description_text_mobile_landscape,
              orientationFlag && style.description_text_mobile_portrait,
            )
          }>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in fringilla nunc. Cras pharetra suscipit nunc, in convallis felis maximus eu. Donec euismod risus nec leo iaculis vulputate. Fusce in euismod elit. Nam lacinia diam vitae sollicitudin viverra. Morbi eu urna malesuada, fermentum eros lobortis, iaculis nisi. Nunc bibendum ligula enim, eget aliquet eros ultricies eget. Nulla vitae consectetur dui. Nam eget leo sed eros sodales tristique.
          </p>
          <p style={
            apply(
              style.description_text,
              mobileToggle && style.description_text_mobile_landscape,
              orientationFlag && style.description_text_mobile_portrait,
            )
          }>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in fringilla nunc. Cras pharetra suscipit nunc, in convallis felis maximus eu. Donec euismod risus nec leo iaculis vulputate. Fusce in euismod elit. Nam lacinia diam vitae sollicitudin viverra. Morbi eu urna malesuada, fermentum eros lobortis, iaculis nisi. Nunc bibendum ligula enim, eget aliquet eros ultricies eget. Nulla vitae consectetur dui. Nam eget leo sed eros sodales tristique.
          </p>
        </div>
        {
          Object.keys(projectsList).map((key, index) => {
            return (
              <Project 
                key={`project${index}`}
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