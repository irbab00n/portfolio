import React from 'react';
import apply from 'applystyles';

import style from './style';


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
        style={apply(style.navigation_link, hovered && style.navigation_link_hovered)}
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