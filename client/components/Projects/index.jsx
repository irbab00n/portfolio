import React from 'react';

import DesktopView from './DesktopView/index.jsx';

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { applyStyles } = this.props;

    return (

      <DesktopView />

    );

  }
}

export default Projects;