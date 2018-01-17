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
    let { tabClicked } = this.state;
    this.setState({
      currentProjectLabel: label,
      tabClicked: true
    }, () => {
      setTimeout(() => {
        this.setState({tabFade: true});
      }, 200)
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

    const { currentProjectLabel, tabClicked, tabFade } = this.state;

    return (

      <div style={style.body}>

        <div style={style.layeringAncestor}>

          <ProjectTabs 
            tabClicked={tabClicked}
            tabFade={tabFade}
            tabsClickToggleTrue={this.tabsClickToggleTrue}
          />

          <ProjectContent
            tabClicked={tabClicked}
            currentProject={projects[currentProjectLabel]}
            tabsClickToggleFalse={this.tabsClickToggleFalse}
          />

        </div>

      </div>

    );

  }
}

export default ProjectView;