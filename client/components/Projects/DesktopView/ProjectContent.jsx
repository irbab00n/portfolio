import React from 'react';


class ProjectContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { tabsClickToggleFalse } = this.props;

    return (

      <div style={{
        position: 'absolute',
        height:'100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#e2e2e2',
      }}>

         <div style={{
            height:'700px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(242, 242, 242, 1.0)',
          }}>
            
            <div id="EXIT PROJECT BUTTON" 
              style={{
                height: '50px',
                width: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '25px',
                backgroundColor: 'red'
              }}
              onClick={tabsClickToggleFalse}
            >
              X
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