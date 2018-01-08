import React from 'react';

import ProjectTabs from './ProjectTabs.jsx';
import ProjectContent from './ProjectContent.jsx';

import style from './style';


class ProjectView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabClicked: false
    };
    this.tabsClickToggleTrue = this.tabsClickToggleTrue.bind(this);
    this.tabsClickToggleFalse = this.tabsClickToggleFalse.bind(this);
  }

  tabsClickToggleTrue() {
    let { tabClicked } = this.state;
    this.setState({
      tabClicked: true
    });
  }

  tabsClickToggleFalse() {
    console.log('Toggle false function ran');
    let { tabClicked } = this.state;
    this.setState({
      tabClicked: false
    });
  }

  render() {

    const { tabClicked } = this.state;
    const { applyStyles } = this.props;

    return (

      <div style={style.body}>

        <div style={style.layeringAncestor}>

          <ProjectTabs 
            tabClicked={tabClicked}
            applyStyles={applyStyles}
            tabsClickToggleTrue={this.tabsClickToggleTrue}
          />
          {
            tabClicked
              ? <ProjectContent 
                  applyStyles={applyStyles}
                  tabsClickToggleFalse={this.tabsClickToggleFalse}
                />
              : <div style={{height:'100%', width: '100%'}}></div>
          }

        </div>

      </div>

    );

  }
}

export default ProjectView;