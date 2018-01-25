import React from 'react';
import apply from 'applystyles';

import Job from './Job.jsx';
import Navigation from './Navigation.jsx';

import jobs from './jobs';

import style from './style';

class ExperienceSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
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

    return (

      <div style={
        apply(
          style.slideBody,
        )
      }>

        <Job 
          job={jobs['hackReactor']}
        />

        <Job 
          job={jobs['eisenbeiss']}
        />

        <Job 
          job={jobs['republic']}
        />

      </div>

    ); 

  }
}



export default ExperienceSlide;