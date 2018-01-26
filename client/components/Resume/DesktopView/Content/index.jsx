import React from 'react';
import apply from 'applystyles';

import About from './About/index.jsx';
import Origins from './Origins/index.jsx';
import Journey from './Journey/index.jsx';


class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { toggleLeftOff } = this.props;

    return (

      <div id="Resume Content" style={{
        width: '100%',
        backgroundColor: 'rgba(240, 240, 240, 0.6)',
        backgroundRepeat: 'repeat-y',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
        
        <About />

      
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 1
        }}>
          
          <Origins /> 

          <Journey />
          
        </div>

      </div>

    );

  }
}

export default Content;