import React from 'react';

import TextFadeInterval from './TextFadeInterval.jsx';

class TextScroller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        'Welcome to my portfolio programming paradise',
        'I am Thomas Cosby, a software engineer'
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
    let { percentScrolled } = this.props;

    return (

      <div style={{
        height: '30px',
        marginBottom: '-400px',
        color: `rgb(41, 67, 78)`
      }}>
        {messages[currentMessageIndex]}
      </div>

    );

  }
}

export default TextScroller;