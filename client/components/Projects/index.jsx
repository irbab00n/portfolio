import React from 'react';

// import DesktopView from './DesktopView/index.jsx';

import Project from './Project/index.jsx';

import projectsList from './projectsList';

import style from './style';

// will serve as the container view

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div style={style.body}> 
        <div style={{
          margin: '25px 0',
          alignSelf: 'center',
          height: '100px',
          width: '100%',
          maxWidth: '1600px',
          display: 'flex',
          alignItems: 'center',
          fontSize: '60px',
          color: 'rgba(0, 122, 193, 1.0)',
        }}>
          <span style={{marginLeft: '50px'}}>MY PROJECTS</span>
        </div>
        {
          Object.keys(projectsList).map((key, index) => {
            return (
              <Project key={`project${index}`}/>
            );
          })
        }
      </div>

    );

  }
}

export default Projects;