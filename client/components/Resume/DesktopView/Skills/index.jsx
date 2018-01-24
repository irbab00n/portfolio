import React from 'react';
import apply from 'applystyles';

import style from './style';

class Skills extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { screenWidth, screenHeight } = this.props;

    return (

      <div style={
        apply(
          {
            height: '400px',
            width: '100%',
            backgroundColor: 'rgba(245, 245, 245, 0.4)',
            boxShadow: '0 6px 12px 0 rgba(0, 0, 0, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            zIndex: 1
          }
        )
      }>
        <div style={{
          width: '100%',
          maxWidth: '1600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            height: '400px',
            width: '100%',
            maxWidth: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <img src="https://s3-us-west-1.amazonaws.com/cos-bytes.com/jsLogo_619x619.jpg" style={{height: '100px', margin: '50px 0 25px 0'}}/>
            <span style={{
              fontSize: '30px'
            }}>
              JavaScript
            </span>
            <div style={{
              margin: '25px 0',
              height: '100px',
              width: '100%',
            }}>
              <center>Well practiced in writing <br/> performant ES6 to power all custom <br/> features seen in this application!</center>
            </div>
          </div>

          <div style={{
            height: '400px',
            width: '100%',
            maxWidth: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <img src="https://s3-us-west-1.amazonaws.com/cos-bytes.com/react_512x512.png" style={{height: '100px', margin: '50px 0 25px 0'}}/>
            <span style={{
              fontSize: '30px'
            }}>
              Front-End Development
            </span>
            <div style={{
              margin: '25px 0',
              height: '100px',
              width: '95%',
            }}>
              <center>Experienced writing web applications <br/> inside of popular frameworks like <br/> React and AngularJS</center>
            </div>
          </div>

          <div style={{
            height: '400px',
            width: '100%',
            maxWidth: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <img src="https://s3-us-west-1.amazonaws.com/cos-bytes.com/nodeExpress.png" style={{height: '100px', margin: '50px 0 25px 0'}}/>
            <span style={{
              fontSize: '30px'
            }}>
              Servers & Services
            </span>
            <div style={{
              margin: '25px 0',
              height: '100px',
              width: '100%',
            }}>
              <center>Solid systems design capabilities <br/> to deliver aysnchronous performace <br/> powered by Node and Express </center>
            </div>
          </div>
        </div>
      </div>

    ); 

  }
}

export default Skills;