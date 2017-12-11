import React from 'react';

import Navbar from './components/Navigation/index.jsx';
import Jumbotron from './components/Jumbotron/index.jsx';

import getDocumentHeight from './helpers/getDocumentHeight';
import getCurrentYOffset from './helpers/getCurrentYOffset';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
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
    this.setState({screenWidth: window.innerWidth, screenHeight: window.innerHeight})
  }

  render() {

    const { screenWidth, screenHeight, percentScrolled } = this.state;
    let direction = screenWidth >= 1000 ? 'row' : 'column';
    let targets = {
      block1: {
        start: 0,
        end: 438,
        label: 'Home'
      },
      block2: {
        start: 439,
        end: 926,
        label: 'Resume'
      },
      block3: {
        start: 927,
        end: 1960,
        label: 'Projects'
      },
      block4: {
        start: 1961,
        end: getDocumentHeight(),
        label: 'Blog'
      }
    };

    return (

      <div style={{
        margin: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'black',
      }}>

        <Navbar 
          screenWidth={screenWidth}
          screenHeight={screenHeight}
          percentScrolled={percentScrolled}
          yOffset={getCurrentYOffset()}
          animationOption={'sharp'}
          targets={targets}
        />

        <Jumbotron percentScrolled={percentScrolled} yOffset={getCurrentYOffset()}/>

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
          width: '100%',
          backgroundColor: 'rgba(242, 242, 242, 1.0)',
          padding: '15px 0'

        }}>
          1000px height block<br/>
          Content Will be available soon!
        </div>

        <div style={{
          height: '1000px',
          width: '100%',
          backgroundColor: 'rgba(236, 236, 236, 1.0)',
          padding: '15px 0'
        }}>
          1000px height block<br/>
          Content Will be available soon!
        </div>

      </div>

    );

  }
}

export default App;
