import React from 'react';

import TextFadeInterval from './TextFadeInterval.jsx';

import applyStyles from '../../helpers/applyStyles';

import style from './style';

class TextScroller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        'Welcome to my portfolio programming paradise',
        'I am Thomas Cosby, a software engineer',
        'I am currently seeking new opportunities as a JavaScript Developer'
      ],
      currentMessageIndex: 0
    };
  }

  componentWillMount() {
    let indexController = setInterval(() => {
      let { messages, currentMessageIndex } = this.state;
      if (currentMessageIndex >= messages.length - 1) {
        this.setState({currentMessageIndex: 0});
      } else {
        this.setState({currentMessageIndex: currentMessageIndex += 1});
      }
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(indexController);
  }

  render() {

    const { messages, currentMessageIndex } = this.state;
    const {
      percentScrolled,
      mobileToggle,
      orientationFlag
    } = this.props;

    return (

      <div style={
        applyStyles(
          style.textScroller,
          {color: `rgba(41, 67, 78, ${(1 - (percentScrolled / 7))})`},
          (mobileToggle && orientationFlag) && style.textScroller_mobile_portrait
        )
      }>
        <center>{messages[currentMessageIndex]}</center>
      </div>

    );

  }
}

export default TextScroller;