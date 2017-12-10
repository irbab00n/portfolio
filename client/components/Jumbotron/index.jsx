import React from 'react';

import LeftCloud from './LeftCloud.jsx';
import RightCloud from './RightCloud.jsx';
import TextScroller from './TextScroller.jsx';

import applyStyles from '../../helpers/applyStyles';

import style from './style';

class Jumbotron extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { percentScrolled, yOffset } = this.props;

    return (

      <div style={applyStyles(style.body, {color: `rgba(41, 67, 78, ${(1 - (percentScrolled / 7))})`})}>

        <RightCloud yOffset={yOffset} />

        <TextScroller percentScrolled={percentScrolled}/>

        <LeftCloud yOffset={yOffset} />

      </div>

    );

  }
}

export default Jumbotron;