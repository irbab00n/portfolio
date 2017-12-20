import React from 'react';

import Header from './Header.jsx';
import Description from './Description.jsx';

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

    const { loaded } = this.state;
    const { applyStyles } = this.props;

    return (

      <div style={
        applyStyles(
          style.slideBody,
          loaded && style.slideBody_loaded
        )
      }>

        <div style={style.slideLayout}>

          <Header 
            image={jobs.hackReactor.image}
            employmentRange={jobs.hackReactor.employmentRange}
            title={jobs.hackReactor.title}
          />

          <Description 
            duties={jobs.hackReactor.duties}
          />

        </div>

        <div style={{
          height: '50px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <span>Left</span>
          <span>Current</span>
          <span>Right</span>
        </div>

      </div>

    ); 

  }
}



export default ExperienceSlide;