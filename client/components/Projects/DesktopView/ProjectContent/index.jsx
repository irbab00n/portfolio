import React from 'react';
import apply from 'applystyles';

import ExitButton from './ExitButton.jsx';
import Carousel from './Carousel/index.jsx';
import InfoBlocks from './InfoBlocks/index.jsx';

import style from './style';


class ProjectContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      buttonClicked: false,
      buttonHovered: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true
      });
    }, 200);
  }

  render() {

    const { loaded, buttonClicked, buttonHovered } = this.state;
    const { tabClicked, currentProject, tabsClickToggleFalse } = this.props;

    return (

      <div style={style.projectContentBody}>

         <div style={style.projectContentImagesBody}>
            
            <ExitButton 
              loaded={tabClicked}
              tabsClickToggleFalse={tabsClickToggleFalse}
            />

            <Carousel 
              pictures={currentProject.pictures}
              loaded={tabClicked}
            />

          </div>

          <InfoBlocks 
            currentProject={currentProject}
            loaded={loaded}
          />

      </div>

    );

  }
}


export default ProjectContent;