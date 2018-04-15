import React from 'react';
import apply from 'applystyles';

import style from './style';

export default class Triangle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { toggle } = this.props;

    return (

      <div style={toggle ? style.triangle_collapsed : style.triangle}></div>

    );

  }
}