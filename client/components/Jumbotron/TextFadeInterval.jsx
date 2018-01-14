import React from 'react';
import apply from 'applystyles';


class TextFadeInterval extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeToggle: false
    };
  }

  componentDidMount() {
    let { fadeToggle } = this.state;
    let { interval } = this.props;
    let timer = setInterval(() => {
      this.setState({fadeToggle: !fadeToggle}), () => {
      };
    }, parseFloat(interval));
    this.setState({fadeToggle: !fadeToggle});
  }

  componentWillUnmount() {
    clearInterval(timer);
  }

  render() {

    const { fadeToggle } = this.state;
    const { message } = this.props;

    return (

      <div style={apply({color: 'rgba(41, 67, 78, 0.0)', WebkitTransition: '1.0s'}, fadeToggle && {color: 'rgba(41, 67, 78, 1.0)'})}>
        {message}
      </div>

    );

  }
}

export default TextFadeInterval;