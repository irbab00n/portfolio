import React from 'react';
import apply from 'applystyles';

import About from './About/index.jsx';

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
          <div style={{
            height: '950px',
            width: '100%',
            maxWidth: '1600px',
            display: 'flex',
            flexDirection: 'column',
            alignitems: 'center',
          }}>
            <div style={{
              height: '50px',
              width: '100%',
              maxWidth: '1600px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              fontSize: '36px',
              color: 'rgba(0, 122, 193, 1.0)',
            }}>
              <span style={{marginRight: '50px'}}>WHERE I COME FROM</span>
            </div>
            <div style={{
              height: '450px',
              width: '100%',
              // backgroundColor: 'rgba(235, 235, 235, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{
                height: '400px',
                width: '100%',
                minWidth: '450px',
                maxWidth: '1000px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(205, 205, 205, 0.6)',
              }}>
                Description Box
              </div>
              <div style={{
                height: '400px',
                width: '100%',
                maxWidth: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(15, 15, 15, 0.6)',
              }}>
                <img src="https://s3-us-west-1.amazonaws.com/cos-bytes.com/welder.jpg" style={{
                  width: '400px',
                  objectFit: 'scale-down'
                }}/>
              </div>

            </div>
            <div style={{
              height: '450px',
              width: '100%',
              // backgroundColor: 'rgba(235, 235, 235, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{
                height: '400px',
                width: '100%',
                maxWidth: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(15, 15, 15, 0.6)',
              }}>
                
              </div>
              <div style={{
                height: '400px',
                width: '100%',
                minWidth: '450px',
                maxWidth: '1000px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(205, 205, 205, 0.6)',
              }}>
                Description Box
              </div>
              
            </div>
          </div>

          <div style={{
            height: '500px',
            width: '100%',
            maxWidth: '1600px',
            display: 'flex',
          }}>
            <div style={{
              height: '50px',
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              fontSize: '36px',
              color: 'rgba(0, 122, 193, 1.0)',
            }}>
              <span style={{marginLeft: '50px'}}>INTRO TO PROGRAMMING</span>
            </div>
          </div>
        </div>

      </div>

    );

  }
}

export default Content;