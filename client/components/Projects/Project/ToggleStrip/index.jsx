import React from 'react';
import apply from 'applystyles';

import Triangle from '../Triangle/index.jsx';

import style from './style';

export default class ToggleStrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    let { hovered } = this.state;
    this.setState({
      hovered: !hovered
    });
  }

  render() {

    const { number, mobileToggle, collapsed, toggleFunction } = this.props;

    const { hovered } = this.state;

    return (

      <div
        id={`toggle-strip-${number}`}
        style={
          apply(
            style.list_body_button,
            mobileToggle && style.list_body_button_mobile,
            collapsed && style.list_body_button_collapsed,
            hovered && style.list_body_button_hovered
          )
        }
        onClick={(e) => {toggleFunction(e)}}
        onTouchEnd={(e) => {toggleFunction(e)}}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <Triangle 
          toggle={collapsed}
        />
      </div>

    );

  }
}