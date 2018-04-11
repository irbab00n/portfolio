import React from 'react';
import apply from 'applystyles';

import style from './style';

export default class TitleBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { collapsed } = this.props;

    return (

      <div
        id="title-box"
        style={
          apply(
            {height: '30%'},
            style.container_body,
            collapsed && style.container_body_collapsed,
            {backgroundColor: 'rgba(210, 210, 210, 1.0)'}
          )
        }
      >

        <div 
          id="left-side"
          style={
            apply(
              style.title_block,
              collapsed && style.title_block_collapsed
            )
          }
        >
          Title
        </div>



        <div 
          id="right-side"
          style={
            apply(
              style.description_block,
              collapsed && style.description_block_collapsed
            )
          }
        >
          Right
        </div>


      </div>
    );

  }
};

/*

Project Title Label
Project Title

Project Description Label
Project Description


Project Contributors Label
List of Contributors
  Contributor

*/