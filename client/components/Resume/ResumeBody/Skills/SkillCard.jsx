import React from 'react';
import apply from 'applystyles';

import style from './style';

export default class SkillCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    // need an image, a header, and an element to place as the description

    let {
      image,
      header,
      description
    } = this.props;

    let splitDescription = description.split('*');

    return (

      <div style={
        apply(
          style.skillsList_card
        )
      }>
        <img src={image} style={{height: '100px', margin: '50px 0 25px 0'}}/>
        <span style={{
          fontSize: '30px'
        }}>
          {header}
        </span>
        <div style={{
          margin: '25px 0',
          height: '100px',
          width: '100%',
        }}>
          <center>
            {
              splitDescription
            }
          </center>
        </div>
      </div>

    );

  }
}