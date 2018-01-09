import React from 'react';

import ProjectTab from './ProjectTab.jsx';


class ProjectTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { clicked } = this.state;
    const { tabClicked, applyStyles, tabsClickToggleTrue } = this.props;

    return (

      <div 
        style={
          applyStyles(
            {
              position: 'absolute',
              height:'100%',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'rgba(226, 226, 226, 1.0)',
              zIndex: 1,
              WebkitTransition: '0.5s'
            },
            tabClicked && {
              backgroundColor: 'rgba(250, 250, 250, 0.0)',
              color: 'rgba(255, 255, 255, 0.0)',
              zIndex: -1
            }
          )
        }
      >
        <ProjectTab 
          tabClicked={tabClicked}
          applyStyles={applyStyles}
          onClick={tabsClickToggleTrue}
        />
        <ProjectTab 
          tabClicked={tabClicked}
          applyStyles={applyStyles}
          onClick={tabsClickToggleTrue}
        />
        <ProjectTab 
          tabClicked={tabClicked}
          applyStyles={applyStyles}
          onClick={tabsClickToggleTrue}
        />
        <ProjectTab 
          tabClicked={tabClicked}
          applyStyles={applyStyles}
          onClick={tabsClickToggleTrue}
        />
      </div>

    );

  }
}


export default ProjectTabs;