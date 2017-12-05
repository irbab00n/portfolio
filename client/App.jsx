import React from 'react';

import Navbar from './components/Navigation/index.jsx';

import getDocumentHeight from './helpers/getDocumentHeight';
import getCurrentYOffset from './helpers/getCurrentYOffset';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: window.innerWidth,
      percentScrolled: 0
    };
    this.calculateScrolled = this.calculateScrolled.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowResize);
    window.addEventListener('scroll', this.calculateScrolled);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
    window.removeEventListener("scroll", this.calculateScrolled);
  }

  calculateScrolled() {
    let windowHeight = window.innerHeight || (document.documentElement || document.body).clientHeight;
    let documentHeight = getDocumentHeight();
    let currentYOffset = getCurrentYOffset();
    let trackLength = documentHeight - windowHeight;
    let percentScrolled = Math.floor(currentYOffset / trackLength * 100); // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
    this.setState({percentScrolled: percentScrolled});
  }

  handleWindowResize() {
    this.setState({screenWidth: window.innerWidth})
  }

  render() {

    const { screenWidth, percentScrolled } = this.state;
    let direction = screenWidth >= 1000 ? 'row' : 'column';

    return (

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>

        <Navbar screenWidth={screenWidth} percentScrolled={percentScrolled} yOffset={getCurrentYOffset()} animationOption={'sharp'} />

        <div style={{
          display: 'flex',
          alignItems:'center',
          justifyContent: 'center',
          height: '500px',
          width: '100%',
          background: `linear-gradient(to bottom, #ffffff 6%, #b3e3ff 68%)`,
          fontSize: '30px',
          color: `rgba(41, 67, 78, ${(1 - (percentScrolled / 7))})`
        }}>
          {/* Install a timer that will change this message once every few seconds */}
          Welcome to my professional programming paradise
        </div>

        <span style={{height: '3px', width: '100%', backgroundColor: 'rgba(41, 67, 78, 0.1)'}}>

        </span>

        <div style={{
          height: '500px',
          display: 'flex',
          flexDirection: direction,
          justifyContent: 'space-evenly',
          alignItems: 'center'
        }}>
          <div>
            <img src='https://s3-us-west-1.amazonaws.com/cos-bytes.com/me.jpg'
              style={{height: '300px', padding: '25px'}}
            />
          </div>

          <div style={{width: '300px', padding: '25px'}}>
            This will be a small biography about me and my mission statement
          </div>
        </div>

        <div style={{
          height: '1000px',
          backgroundColor: 'gray',
          padding: '15px'

        }}>
          This is going to be a huge block of content
        </div>

        <div style={{
          height: '1000px',
          backgroundColor: 'gray',
          padding: '15px'
        }}>
          This is going to be a huge block of content
        </div>

      </div>

    );

  }
}

export default App;
