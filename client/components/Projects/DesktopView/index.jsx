import React from 'react';

class ProjectView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

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

        <div style={{
          height:'100%',
          width: '100%',
          maxWidth: '1250px',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#e2e2e2'
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
            Top
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

      </div>

    );

  }
}

export default ProjectView;