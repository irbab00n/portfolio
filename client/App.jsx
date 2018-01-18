import React from 'react';

import Precache from './components/Precache/index.jsx';
import Navbar from './components/Navigation/index.jsx';
import Jumbotron from './components/Jumbotron/index.jsx';
import Resume from './components/Resume/index.jsx';
import Projects from './components/Projects/index.jsx';
import Contact from './components/Contact/index.jsx';

import Board from './components/Minesweeper/Board.jsx';

import getDocumentHeight from './helpers/getDocumentHeight';
import getCurrentYOffset from './helpers/getCurrentYOffset';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      percentScrolled: 0,
      test1: false,
      test2: false,
      test3: false
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
    let percentScrolled = Math.floor(currentYOffset / trackLength * 100); // gets percentage scrolled (ie: 80 or NaN if tracklength === 0)
    this.setState({percentScrolled: percentScrolled});
  }

  handleWindowResize() {
    this.setState({screenWidth: window.innerWidth, screenHeight: window.innerHeight})
  }

  render() {

    const { screenWidth, screenHeight, percentScrolled } = this.state;
    const mobileToggle = screenWidth < 1000; // True: Mobile View, False: Desktop View
    const orientationFlag = screenWidth < screenHeight; // True: Portrait, False: Landscape
    let targets = {
      block1: {
        start: 0,
        end: 923,
        label: 'Home'
      },
      block2: {
        start: 931,
        end: 1433,
        label: 'About Me'
      },
      block3: {
        start: 1434,
        end: 2437,
        label: 'Projects'
      },
      block4: {
        start: 2438,
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

        <Precache image='https://s3-us-west-1.amazonaws.com/cos-bytes.com/portfolio_design.jpg' />
        <Precache image='https://s3-us-west-1.amazonaws.com/cos-bytes.com/portfolio_design2.jpg' />
        <Precache image='https://s3-us-west-1.amazonaws.com/cos-bytes.com/portfolio_fleshed.jpg' />
        <Precache image='https://s3-us-west-1.amazonaws.com/cos-bytes.com/portfolio_design_after.jpg' />
        <Precache image='https://s3-us-west-1.amazonaws.com/cos-bytes.com/portfolio_project_tabs.jpg' />
        <Precache image='https://s3-us-west-1.amazonaws.com/cos-bytes.com/portfolio_projects_component.jpg' />
        <Precache image='https://s3-us-west-1.amazonaws.com/cos-bytes.com/trainerFinder_signup.jpg' />
        <Precache image='https://s3-us-west-1.amazonaws.com/cos-bytes.com/trainerFinder_profile.jpg' />
        <Precache image='https://s3-us-west-1.amazonaws.com/cos-bytes.com/trainerFinder_search.jpg' />
        <Precache image='https://s3-us-west-1.amazonaws.com/cos-bytes.com/vagabondly_fleshed.jpg' />
        <Precache image='https://s3-us-west-1.amazonaws.com/cos-bytes.com/vagabondly_skeleton.jpg' />
        <Precache image='https://s3-us-west-1.amazonaws.com/cos-bytes.com/vagabondly_google_maps.jpg' />
        <Precache image='https://s3-us-west-1.amazonaws.com/cos-bytes.com/vagabondly_trips.jpg' />

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

        <span style={{height: '3px', width: '100%', backgroundColor: 'rgba(89, 89, 89, 0.1)'}}></span>

        <Resume 
          screenWidth={screenWidth}
          screenHeight={screenHeight}
          percentScrolled={percentScrolled}
          mobileToggle={mobileToggle}
          orientationFlag={orientationFlag}
          yOffset={getCurrentYOffset()}
        />

        <span style={{height: '3px', width: '100%', backgroundColor: 'rgba(89, 89, 89, 0.4)'}}></span>

        <Projects
          screenWidth={screenWidth}
          screenHeight={screenHeight}
          mobileToggle={mobileToggle}
          orientationFlag={orientationFlag}
          yOffset={getCurrentYOffset()}
        />

        <Contact />

      </div>

    );

  }
}

export default App;
