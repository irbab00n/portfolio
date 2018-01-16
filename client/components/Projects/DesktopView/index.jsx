import React from 'react';

import ProjectTabs from './ProjectTabs.jsx';
import ProjectContent from './ProjectContent/index.jsx';

import style from './style';

import projects from '../projects';


class ProjectView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProjectLabel: 'portfolio', 
      tabClicked: false,
      tabFade: false
    };
    this.tabsClickToggleTrue = this.tabsClickToggleTrue.bind(this);
    this.tabsClickToggleFalse = this.tabsClickToggleFalse.bind(this);
  }

  tabsClickToggleTrue(label) {
    console.log('tabsClickToggleTrue function ran: ', label);
    let { tabClicked } = this.state;
    this.setState({
      currentProjectLabel: label,
      tabClicked: true
    }, () => {
      setTimeout(() => {
        this.setState({tabFade: true});
      }, 400)
    });
  }

  tabsClickToggleFalse() {
    let { tabClicked } = this.state;
    this.setState({
      tabFade: false
    }, () => {
      setTimeout(() => {
        this.setState({tabClicked: false});
      }, 100)
    });
  }

  render() {

    console.log('Projects import: ', projects['portfolio']);

    const { currentProjectLabel, tabClicked, tabFade } = this.state;

    return (

      <div style={style.body}>

        <div style={style.layeringAncestor}>

          <ProjectTabs 
            tabClicked={tabClicked}
            tabFade={tabFade}
            tabsClickToggleTrue={this.tabsClickToggleTrue}
          />
          {
            tabClicked
              ? <ProjectContent
                  currentProject={projects[currentProjectLabel]}
                  tabsClickToggleFalse={this.tabsClickToggleFalse}
                />
              : <div style={{height:'100%', width: '100%', backgroundColor: 'rgba(25, 25, 25, 1.0)'}}></div>
          }

        </div>

      </div>

    );

  }
}

export default ProjectView;