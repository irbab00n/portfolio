import React from 'react';
import apply from 'applystyles';

import Triangle from '../Triangle/index.jsx';

import style from './style';

export default class ToggleStrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { number, mobileToggle, collapsed, toggleFunction } = this.props;

    return (

      <div
        id={`toggle-strip-${number}`}
        style={
          apply(
            style.list_body_button,
            mobileToggle && style.list_body_button_mobile,
            collapsed && style.list_body_button_collapsed
          )
        }
        onClick={(e) => {toggleFunction(e)}}
        onTouchEnd={(e) => {toggleFunction(e)}}
      >
        <Triangle 
          toggle={collapsed}
        />
      </div>

    );

  }
}