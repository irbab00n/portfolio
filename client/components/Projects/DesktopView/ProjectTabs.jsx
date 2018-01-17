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
          baseTextColor={'rgba(25, 25, 25, 1.0)'}
          tabHoverColor={'inset 0 0 0 1000px rgba(175, 100, 200, 0.3)'}
          tabBackgroundImage={'https://s3-us-west-1.amazonaws.com/cos-bytes.com/portfolio_tab.jpg'}
          tabText={'Portfolio'}
          onClick={tabsClickToggleTrue}
        />
        <ProjectTab 
          label={'trainerFinder'}
          tabClicked={tabClicked}
          baseTextColor={'rgba(25, 25, 25, 1.0)'}
          tabHoverColor={'inset 0 0 0 1000px rgba(225, 150, 50, 0.3)'}
          tabBackgroundImage={'https://s3-us-west-1.amazonaws.com/cos-bytes.com/trainerFinder_tab.jpg'}
          tabText={'TrainerFinder'}
          onClick={tabsClickToggleTrue}
        />
        <ProjectTab 
          label={'vagabondly'}
          tabClicked={tabClicked}
          baseTextColor={'rgba(25, 25, 25, 1.0)'}
          tabHoverColor={'inset 0 0 0 1000px rgba(50, 100, 200, 0.3)'}
          tabBackgroundImage={'https://s3-us-west-1.amazonaws.com/cos-bytes.com/vagabondly_tab.jpg'}
          tabText={'Vagabondly'}
          onClick={tabsClickToggleTrue}
        />
        <ProjectTab 
          label={'mock'}
          tabClicked={tabClicked}
          baseTextColor={'rgba(200, 200, 200, 1.0)'}
          tabHoverColor={'inset 0 0 0 1000px rgba(150, 75, 100, 0.3)'}
          tabBackgroundImage={'https://s3-us-west-1.amazonaws.com/cos-bytes.com/example_tab.jpg'}
          tabText={'Example Tab Component'}
          onClick={tabsClickToggleTrue}
        />
      </div>

    );

  }
}


export default ProjectTabs;