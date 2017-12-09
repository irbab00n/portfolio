import React from 'react';

import style from './style';

import applyStyles from '../../../helpers/applyStyles';


class NavLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  render() {

    const { hovered } = this.state;

    return (

      <div
        style={applyStyles(style.navigation_link, hovered && style.navigation_link_hovered)}
        onMouseEnter={() => { this.setState({hovered: true}); }}
        onMouseLeave={() => { this.setState({hovered: false}); }}
        onClick={this.props.onClick}
      >
        {this.props.name}
      </div>

    );

  }
}

export default NavLink;