import React from 'react';

import ProjectTabs from './ProjectTabs.jsx';
import ProjectContent from './ProjectContent.jsx';

import style from './style';


class ProjectView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { applyStyles } = this.props;

    return (

      <div style={style.body}>

        <div style={style.layeringAncestor}>

          <ProjectTabs 
            applyStyles={applyStyles}
          />
          <ProjectContent 
            applyStyles={applyStyles}
          />

        </div>

      </div>

    );

  }
}

export default ProjectView;