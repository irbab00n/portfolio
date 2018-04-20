import React from 'react';
import apply from 'applystyles';

import Triangle from '../Triangle/index.jsx';

import style from './style';

export default class ToggleStrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleUserTap = this.handleUserTap.bind(this);
  }

  componentWillMount() {
    window.addEventListener('touchstart', this.handleUserTap);
  }

  componentWillUnmount() {
    window.removeEventListener('touchstart', this.handleUserTap);
  }

  handleUserTap(e) {
    if (e.target.id === `toggle-strip-${this.props.number}`) {
      this.props.toggleFunction();
    }
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
        onClick={mobileToggle ? () => {} : toggleFunction}
      >
        <Triangle 
          toggle={collapsed}
        />
      </div>

    );

  }
}