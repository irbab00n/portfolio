import React from 'react';

import ExitButton from './ExitButton.jsx';
import Carousel from './Carousel.jsx';

import style from './style';


class ProjectContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      buttonClicked: false,
      buttonHoverd: false
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
    const { applyStyles, tabsClickToggleFalse } = this.props;

    return (

      <div style={style.projectContentBody}>

         <div style={style.projectContentImagesBody}>
            
            <ExitButton 
              loaded={loaded}
              tabsClickToggleFalse={tabsClickToggleFalse}
              applyStyles={applyStyles}
            />

            <Carousel />

          </div>

          <div style={{
            height:'300px',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>

            <div style={{
              height:'100%',
              width: '30%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'rgba(237, 237, 237, 1.0)',
            }}>
              Bottom-Left
            </div>

            <div style={{
              height:'100%',
              width: '70%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'rgba(232, 232, 232, 1.0)',
            }}>
              Bottom-Right
            </div>

          </div>

      </div>

    );

  }
}


export default ProjectContent;