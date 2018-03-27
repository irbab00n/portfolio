import React from 'react';
import apply from 'applyStyles';

import style from './style';

export default class SkillCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    <div style={
      apply(
        style.skillsList_card
      )
    }>
      <img src="https://s3-us-west-1.amazonaws.com/cos-bytes.com/jsLogo_619x619.jpg" style={{height: '100px', margin: '50px 0 25px 0'}}/>
      <span style={{
        fontSize: '30px'
      }}>
        JavaScript
      </span>
      <div style={{
        margin: '25px 0',
        height: '100px',
        width: '100%',
      }}>
        <center>Well practiced in writing <br/> performant ES6 to power all custom <br/> features seen in this application</center>
      </div>
    </div>

  }
}