import React from 'react';
import apply from 'applystyles';

import About from './About/index.jsx';
import Origins from './Origins/index.jsx';

import Experience from './Experience/index.jsx';
import Education from './Education/index.jsx';


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

          <div style={{
            height: '500px',
            width: '100%',
            maxWidth: '1600px',
            display: 'flex',
          }}>
            <div style={{
              marginTop: '50px',
              height: '50px',
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              fontSize: '30px',
              color: 'rgba(0, 122, 193, 1.0)',
            }}>
              <span style={{marginLeft: '50px'}}>THEN THERE WAS PROGRAMMING</span>
            </div>
          </div>
        </div>

      </div>

    );

  }
}

export default Content;