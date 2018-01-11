import React from 'react';

import ExitButton from './ExitButton.jsx';


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

      <div style={{
        position: 'absolute',
        height:'100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#e2e2e2'
      }}>

         <div style={{
            height:'700px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            backgroundColor: 'rgba(25, 25, 25, 1.0)',
          }}>
            
            <ExitButton 
              loaded={loaded}
              tabsClickToggleFalse={tabsClickToggleFalse}
              applyStyles={applyStyles}
            />

            <div id="Carosel" style={{
              position: 'relative',
              top: '25px',
              alignSelf: 'center',
              height: '600px',
              width: '1000px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(100, 100, 100, 1.0)'
            }}>
              Carosel
            </div>

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