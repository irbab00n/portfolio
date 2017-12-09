import React from 'react';

import applyStyles from '../../helpers/applyStyles';

import style from './style';

class Jumbotron extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { percentScrolled } = this.props;

    return (

      <div style={applyStyles(style.body, {color: `rgba(41, 67, 78, ${(1 - (percentScrolled / 7))})`})}>
        {/* Install a timer that will change this message once every few seconds */}
        Welcome to my professional programming paradise
      </div>

    );

  }
}

export default Jumbotron;