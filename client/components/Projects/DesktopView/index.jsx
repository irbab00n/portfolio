import React from 'react';

import ProjectTabs from './ProjectTabs.jsx';
import ProjectContent from './ProjectContent/index.jsx';

import style from './style';


class ProjectView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabClicked: false,
      tabFade: false
    };
    this.tabsClickToggleTrue = this.tabsClickToggleTrue.bind(this);
    this.tabsClickToggleFalse = this.tabsClickToggleFalse.bind(this);
  }

  tabsClickToggleTrue() {
    let { tabClicked } = this.state;
    this.setState({
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

  // This is where we will have to manage all of the switching of the available images and the rest of the content

  render() {

    const { tabClicked, tabFade } = this.state;

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