import React from 'react';

import applyStyles from '../../helpers/applyStyles';

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
    console.log('Interval set on mounting Text Component: ', parseFloat(interval));
    let timer = setInterval(() => {
      console.log('Initialized state of toggle: Expected: False, Actual: ', fadeToggle);
      console.log('Re-assigned toggle: Expected: True, Actual: ', !fadeToggle);
      this.setState({fadeToggle: !fadeToggle}), () => {
        console.log('Triggering off the Toggle');
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

    console.log('Toggle state: ', fadeToggle);
    console.log('Style object: ', applyStyles({color: 'rgba(41, 67, 78, 0.0)', WebkitTransition: '1.0s'}, fadeToggle && {color: 'rgba(41, 67, 78, 1.0)'}));

    return (

      <div style={applyStyles({color: 'rgba(41, 67, 78, 0.0)', WebkitTransition: '1.0s'}, fadeToggle && {color: 'rgba(41, 67, 78, 1.0)'})}>
        {message}
      </div>

    );

  }
}

export default TextFadeInterval;