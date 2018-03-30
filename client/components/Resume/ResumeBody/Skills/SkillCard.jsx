import React from 'react';
import apply from 'applystyles';

import style from './style';

export default class SkillCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  render() {

    let {
      image,
      header,
      description
    } = this.props;

    let {
      hovered
    } = this.state;

    let splitDescription = description.split('*');

    return (

      <div 
        style={
          apply(
            style.skillsList_card,
            hovered && style.skillsList_card_hovered
          )
        }
        onMouseEnter={() => this.setState({hovered: true})}
        onMouseLeave={() => this.setState({hovered: false})}
      >
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
          <center style={{margin: '0 14px'}}>
            {
              splitDescription
            }
          </center>
        </div>
      </div>

    );

  }
}