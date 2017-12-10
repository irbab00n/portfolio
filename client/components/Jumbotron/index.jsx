import React from 'react';

import applyStyles from '../../helpers/applyStyles';

import style from './style';

class Jumbotron extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { percentScrolled, yOffset } = this.props;

    return (

      <div style={applyStyles(style.body, {color: `rgba(41, 67, 78, ${(1 - (percentScrolled / 7))})`})}>

        <div style={{
          marginRight: `${-(yOffset * 1.11)}px`,
          zIndex: '-1',
          marginTop: '-400px',
          height: '100px',
          width: '500px',
          alignSelf: 'flex-end',
          WebkitTransition: '0.1s'
        }}>
          <img src='http://pngimg.com/uploads/cloud/cloud_PNG24.png?i=1'/>
        </div>


        {/* Change where the color applies from the container to the text field */}
        {/* Install a timer that will change this message once every few seconds */}
        <span style={{marginBottom: '-400px'}}>Welcome to my professional programming paradise</span>

        <div style={{
          marginLeft: `${-(yOffset * 1.11)}px`,
          zIndex: '-1',
          height: '100px',
          width: '500px',
          alignSelf: 'flex-start',
          WebkitTransition: '0.1s'
        }}>
          <img src='https://reclay-group.com/de/images/header/stage_cloud_2.png'/>
        </div>

      </div>

    );

  }
}

export default Jumbotron;