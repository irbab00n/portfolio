import React from 'react';
import apply from 'applystyles';

import Experience from './Experience/index.jsx';
import Education from './Education/index.jsx';

import ImageBlock from './ImageBlock.jsx';
import AboutMeBlock from './AboutMeBlock.jsx';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { toggleLeftOff } = this.props;

    return (

      <div id="Resume Content" style={{
        marginBottom: '50px',
        height: '1050px',
        width: '100%',
        backgroundRepeat: 'repeat-y',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
        <div id="Left Column" style={{
          height: '100%',
          width: '100%',
          minWidth : '400px',
          maxWidth: '500px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 1
        }}>

          <ImageBlock 
            toggleLeftOff={toggleLeftOff}
          />

          <AboutMeBlock 
            toggleLeftOff={toggleLeftOff}
          />

        </div>

        <div id="Right Column" style={{
          alignSelf: 'flex-start',
          height: '1050px',
          width: '100%',
          minWidth : '600px',
          maxWidth: '900px',
          backgroundColor: 'rgba(245, 245, 245, 0.6)',
          boxShadow: '0 6px 12px 0 rgba(0, 0, 0, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          zIndex: 1
        }}>
          <span style={{paddingLeft: '50px', width: '100%', fontSize: '36px'}}>EXPERIENCE</span>
          <Experience />
          <span style={{paddingLeft: '50px', width: '100%', fontSize: '36px'}}>EDUCATION</span>
          <Education />
        </div>
      </div>

    );

  }
}

export default Content;