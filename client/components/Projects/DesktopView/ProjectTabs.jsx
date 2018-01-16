import React from 'react';
import apply from 'applystyles';

import ProjectTab from './ProjectTab.jsx';

import style from './style';


class ProjectTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { clicked } = this.state;
    const { tabClicked, tabFade, tabsClickToggleTrue } = this.props;

    return (

      <div 
        style={
          apply(
            style.tabsBody,
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
          label={'portfolio'}
          tabClicked={tabClicked}
          tabHoverColor={'inset 0 0 0 1000px rgba(225, 225, 225, 0.3)'}
          tabBackgroundImage={'https://www.xmple.com/wallpaper/hexagon-white-blue-gradient-black-glow-cyan-1920x1080-c4-4cdce0-ffffff-4c57e0-000000-l2-10-144-a-20-f-6.svg'}
          tabText={'Portfolio'}
          onClick={tabsClickToggleTrue}
        />
        <ProjectTab 
          label={'trainerFinder'}
          tabClicked={tabClicked}
          tabHoverColor={'inset 0 0 0 1000px rgba(225, 255, 50, 0.3)'}
          tabBackgroundImage={'https://i.stack.imgur.com/kzwT7.png'}
          tabText={'TrainerFinder'}
          onClick={tabsClickToggleTrue}
        />
        <ProjectTab 
          label={'vagabondly'}
          tabClicked={tabClicked}
          tabHoverColor={'inset 0 0 0 1000px rgba(200, 100, 20, 0.3)'}
          tabBackgroundImage={'https://images3.alphacoders.com/853/thumb-1920-85305.jpg'}
          tabText={'Vagabondly'}
          onClick={tabsClickToggleTrue}
        />
        <ProjectTab 
          label={''}
          tabClicked={tabClicked}
          tabHoverColor={'inset 0 0 0 1000px rgba(225, 0, 100, 0.3)'}
          tabBackgroundImage={'https://www.xmple.com/wallpaper/triangle-orange-pink-1920x1080-c2-db7093-ff8c00-l2-250-1250-a-255-f-10.svg'}
          tabText={'Tab 4, CLICK ME!'}
          onClick={tabsClickToggleTrue}
        />
      </div>

    );

  }
}


export default ProjectTabs;