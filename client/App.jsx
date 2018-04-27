import React from 'react';

import Navbar from './components/Navbar/index.jsx';
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
      targets: {
        block1: {
          start: 0,
          end: 0,
          label: 'Home'
        },
        block2: {
          start: 0,
          end: 0,
          label: 'About Me'
        },
        block3: {
          start: 0,
          end: 0,
          label: 'Projects'
        }
      }
    };
    this.buildNavigationTargets = this.buildNavigationTargets.bind(this);
    this.calculateScrolled = this.calculateScrolled.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  buildNavigationTargets() {
    let navbarHeight = document.getElementById('navigation-body').scrollHeight;
    let jumbotronHeight = document.getElementById('jumbotron-body').scrollHeight;
    let resumeHeight = document.getElementById('resume-body').scrollHeight;
    let projectsHeight = document.getElementById('projects-body').scrollHeight;

    let targets = {
      block1: {
        start: 0,
        end: jumbotronHeight - navbarHeight,
        label: 'Home'
      },
      block2: {
        start: jumbotronHeight - navbarHeight + 1,
        end: jumbotronHeight + resumeHeight - navbarHeight,
        label: 'About Me'
      },
      block3: {
        start: jumbotronHeight + resumeHeight - navbarHeight + 1,
        end: jumbotronHeight + resumeHeight + projectsHeight - navbarHeight,
        label: 'Projects'
      }
    };

    this.setState({
      targets
    });
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowResize);
    window.addEventListener('scroll', this.calculateScrolled);
  }

  componentDidMount() {
    this.buildNavigationTargets();
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
    this.setState({screenWidth: window.innerWidth, screenHeight: window.innerHeight}, () => {setTimeout(this.buildNavigationTargets, 100)});
  }


  render() {

    const { screenWidth, screenHeight, percentScrolled, targets } = this.state;
    const mobileToggle = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const orientationFlag = screenWidth < screenHeight; // True: Portrait, False: Landscape


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


        <Resume 
          screenWidth={screenWidth}
          screenHeight={screenHeight}
          percentScrolled={percentScrolled}
          mobileToggle={mobileToggle}
          orientationFlag={orientationFlag}
          yOffset={getCurrentYOffset()}
        />


        <Projects
          screenWidth={screenWidth}
          screenHeight={screenHeight}
          mobileToggle={mobileToggle}
          orientationFlag={orientationFlag}
          yOffset={getCurrentYOffset()}
        />

      </div>

    );

  }
}

export default App;
