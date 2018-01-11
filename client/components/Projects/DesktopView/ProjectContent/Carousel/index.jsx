import React from 'react';

import TransitionButton from './TransitionButton.jsx';

import style from './style';


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { loaded, applyStyles } = this.props;

    return (

      <div style={{
        position: 'relative',
        top: '25px',
        alignSelf: 'center',
        height: '600px',
        width: '1000px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>

        <TransitionButton 
          direction={'left'}
          onClick={() => console.log('left button clicked')}
          applyStyles={applyStyles}
        />        

        <div style={{
          height: '100%',
          width: '800px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>

          <div id="Current Image" style={{
            height: '500px',
            width: '800px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <img src='https://s3-us-west-1.amazonaws.com/cos-bytes.com/vagabondly_fleshed.png' style={{
              width: '100%'
            }}/>
          </div>

          <div id="Available Images" style={{
            height: '100px',
            width: '800px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(120, 120, 120, 1.0)'
          }}>
            <img src='https://s3-us-west-1.amazonaws.com/cos-bytes.com/vagabondly_skeleton.png' style={{
              height: '50%',
              opacity: '0.5'
            }}/>
          </div>

        </div>

        <TransitionButton 
          direction={'right'}
          onClick={() => console.log('right button clicked')}
          applyStyles={applyStyles}
        />  

      </div>

    );

  }
}

export default Carousel;