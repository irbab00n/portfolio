import React from 'react';

import style from './style';

class ExperienceSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
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
          style.body,
          loaded && style.body_loaded
        )
      }>
        <center>This is the Experience Slide.  This slide will display when the Experience Tab is clicked</center>
      </div>

    ); 

  }
}

export default ExperienceSlide;