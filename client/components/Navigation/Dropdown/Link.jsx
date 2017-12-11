import React from 'react';

import style from './style';

import applyStyles from '../../../helpers/applyStyles';


class Link extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  render() {

    const { hovered } = this.state;
    const { name, dropdownToggle, orientationFlag, onClick } = this.props;

    return (

      <div
        style={
          applyStyles(
            style.link_collapsed,
            dropdownToggle && style.link_expanded,
            (dropdownToggle && orientationFlag) && style.link_expanded_mobile,
            hovered && style.link_hovered,
          )
        }
        onMouseEnter={dropdownToggle ? () => {this.setState({hovered: true})} : () => {} }
        onMouseLeave={dropdownToggle ? () => {this.setState({hovered: false})} : () => {} }
        onClick={this.props.onClick}
      >
        {dropdownToggle ? name : ''}
      </div>

    );

  }
}

export default Link;