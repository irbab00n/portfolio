import React from 'react';

import Job from './Job.jsx';
import Navigation from './Navigation.jsx';

import jobs from './jobs';

import style from './style';

class ExperienceSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      jobNames: ['hackReactor', 'eisenbeiss', 'republic'],
      jobIndex: 0
    };
    this.changeIndex = this.changeIndex.bind(this);
  }

  changeIndex(direction) {
    let { jobNames, jobIndex } = this.state;
    switch(direction) {
      case 'left': 
        if (jobIndex > 0) {
          this.setState({jobIndex: jobIndex -= 1});
        }
        break;
      case 'right':
        if (jobIndex < jobNames.length - 1) {
          this.setState({jobIndex: jobIndex += 1});
        }
        break;
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true
      });
    }, 100)
  }

  render() {

    const { loaded, jobNames, jobIndex } = this.state;
    const { applyStyles } = this.props;

    return (

      <div style={
        applyStyles(
          style.slideBody,
          loaded && style.slideBody_loaded
        )
      }>

        <Job 
          job={jobs[jobNames[jobIndex]]}
        />

        <Navigation 
          prevClick={() => {this.changeIndex('left')}}
          nextClick={() => {this.changeIndex('right')}}
          applyStyles={applyStyles}
        />

      </div>

    ); 

  }
}



export default ExperienceSlide;