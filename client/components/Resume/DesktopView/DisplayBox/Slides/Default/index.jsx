import React from 'react';

import style from './style';

class DefaultSlide extends React.Component {
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
        <div style={{
          fontSize: '16px',
          lineHeight: '150%'
        }}>
          Hello everyone!  My name is Thomas Cosby, a former gearbox technician turned software engineer.
          What started out as a hobby, learning how to program very small video games in Unity, turned into a fascination of how the controlled manipulation electricty impacts our daily lives on such a fundamental level.
          After weeks of researching and learning more about how software is made, I knew it was time to level up my life and dive deep training to be an engineer.
          I attended the Advanced Software Engineering Immersive, Hack Reactor, to learn the techniques and technologies necessary for web-based application development.
        </div>
      </div>

    ); 

  }
}

export default DefaultSlide;