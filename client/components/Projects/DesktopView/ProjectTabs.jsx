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

    let zIndex = tabClicked ? 0: 1;

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
              zIndex: {zIndex},
              WebkitTransition: '0.2s'
            },
            tabClicked && {
              backgroundColor: 'rgba(250, 250, 250, 0.0)',
              color: 'rgba(255, 255, 255, 0.0)'
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