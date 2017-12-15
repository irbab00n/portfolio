import React from 'react';

import Navbar from './components/Navigation/index.jsx';
import Jumbotron from './components/Jumbotron/index.jsx';
import Resume from './components/Resume/index.jsx';


import Board from './components/Minesweeper/Board.jsx';

import getDocumentHeight from './helpers/getDocumentHeight';
import getCurrentYOffset from './helpers/getCurrentYOffset';
import applyStyles from './helpers/applyStyles';


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
    window.removeEventListener('scroll', this.calculateScrolled);
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
    const mobileToggle = screenWidth < 1000; // True: Mobile View, False: Desktop View
    const orientationFlag = screenWidth < screenHeight; // True: Portrait, False: Landscaped
    let targets = {
      block1: {
        start: 0,
        end: 438,
        label: 'Home'
      },
      block2: {
        start: 439,
        end: 926,
        label: 'About Me'
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
          mobileToggle={mobileToggle}
          orientationFlag={orientationFlag}
          yOffset={getCurrentYOffset()}
          animationOption={'sharp'}
          targets={targets}
        />

        <Jumbotron
          screenWidth={screenWidth}
          screenHeight={screenHeight}
          percentScrolled={percentScrolled}
          mobileToggle={mobileToggle}
          orientationFlag={orientationFlag}
          yOffset={getCurrentYOffset()}
        />

        <span style={{height: '3px', width: '100%', backgroundColor: 'rgba(89, 89, 89, 0.2)'}}>

        </span>

        <Resume 
          screenWidth={screenWidth}
          screenHeight={screenHeight}
          percentScrolled={percentScrolled}
          mobileToggle={mobileToggle}
          orientationFlag={orientationFlag}
          yOffset={getCurrentYOffset()}
          applyStyles={applyStyles}
        />

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
