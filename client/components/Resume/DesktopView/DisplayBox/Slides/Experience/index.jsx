import React from 'react';

import Job from './Job.jsx';

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
    console.log('click registered');
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

        <div style={{
          height: '50px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div onClick={() => {this.changeIndex('left')}}>Left</div>
          <div>Center</div>
          <div onClick={() => {this.changeIndex('right')}}>Right</div>
        </div>

      </div>

    ); 

  }
}



export default ExperienceSlide;