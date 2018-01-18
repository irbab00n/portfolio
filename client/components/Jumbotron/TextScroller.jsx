import React from 'react';
import apply from 'applystyles';

import style from './style';

class TextScroller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        'Welcome to my portfolio programming paradise',
        'I am Thomas Cosby, and I write code',
        'I am currently seeking new opportunities as a Software Engineer'
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
    }, 3000);
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
        apply(
          style.textScroller,
          (mobileToggle && orientationFlag) && style.textScroller_mobile_portrait
        )
      }>
        <center>{messages[currentMessageIndex]}</center>
      </div>

    );

  }
}

export default TextScroller;