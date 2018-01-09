import React from 'react';

import ProjectTab from './ProjectTab.jsx';


class ProjectTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { clicked } = this.state;
    const { tabClicked, tabFade, applyStyles, tabsClickToggleTrue } = this.props;

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
              height: '100px'
            },
            tabFade && {
              opacity: '0.1'
            }
          )
        }
      >
        <ProjectTab 
          tabClicked={tabClicked}
          tabHoverColor={'inset 0 0 0 1000px rgba(225, 225, 225, 0.3)'}
          tabBackgroundImage={'https://www.xmple.com/wallpaper/hexagon-white-blue-gradient-black-glow-cyan-1920x1080-c4-4cdce0-ffffff-4c57e0-000000-l2-10-144-a-20-f-6.svg'}
          tabText={'Tab 1, CLICK ME!'}
          applyStyles={applyStyles}
          onClick={tabsClickToggleTrue}
        />
        <ProjectTab 
          tabClicked={tabClicked}
          tabHoverColor={'inset 0 0 0 1000px rgba(225, 255, 50, 0.3)'}
          tabBackgroundImage={'https://i.stack.imgur.com/kzwT7.png'}
          tabText={'Tab 2, CLICK ME!'}
          applyStyles={applyStyles}
          onClick={tabsClickToggleTrue}
        />
        <ProjectTab 
          tabClicked={tabClicked}
          tabHoverColor={'inset 0 0 0 1000px rgba(200, 100, 20, 0.3)'}
          tabBackgroundImage={'https://images3.alphacoders.com/853/thumb-1920-85305.jpg'}
          tabText={'Tab 3, CLICK ME!'}
          applyStyles={applyStyles}
          onClick={tabsClickToggleTrue}
        />
        <ProjectTab 
          tabClicked={tabClicked}
          tabHoverColor={'inset 0 0 0 1000px rgba(225, 0, 100, 0.3)'}
          tabBackgroundImage={'https://www.xmple.com/wallpaper/triangle-orange-pink-1920x1080-c2-db7093-ff8c00-l2-250-1250-a-255-f-10.svg'}
          tabText={'Tab 4, CLICK ME!'}
          applyStyles={applyStyles}
          onClick={tabsClickToggleTrue}
        />
      </div>

    );

  }
}


export default ProjectTabs;