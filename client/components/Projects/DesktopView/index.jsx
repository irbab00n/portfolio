import React from 'react';

import ProjectTabs from './ProjectTabs.jsx';
import ProjectContent from './ProjectContent.jsx';

class ProjectView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { applyStyles } = this.props;

    return (

      <div id="Desktop view" style={{
        padding: '15px 0',
        height: '1000px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(225, 225, 225, 1.0)',
      }}>

        <div id="Layering Ancestor" style={{
          position: 'relative',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          maxWidth: '1250px',
        }}>

          <ProjectTabs 
            applyStyles={applyStyles}
          />
          <ProjectContent />

        </div>

      </div>

    );

  }
}

export default ProjectView;