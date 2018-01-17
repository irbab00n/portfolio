import React from 'react';
import TitleBlock from './TitleBlock.jsx';
import AboutBlock from './AboutBlock.jsx';

import style from './style';


class InfoBlocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { currentProject, loaded } = this.props;

    return (

      <div style={style.infoBlocksBody}>

        <TitleBlock 
          loaded={loaded}
          currentProject={currentProject}
        />

        <AboutBlock 
          loaded={loaded}
          currentProject={currentProject}
        />

      </div>

    );

  }
}

export default InfoBlocks;