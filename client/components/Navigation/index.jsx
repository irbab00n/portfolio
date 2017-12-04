import React from 'react';
import _ from 'lodash';

import NavLink from './NavLink.jsx';

import applyStyles from '../../helpers/applyStyles';

import style from './navbarStyle';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownToggled: false,

    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    let { dropdownToggled } = this.state;
    this.setState({dropdownToggled: !dropdownToggled});
  }

  render() {

    const { dropdownToggled } = this.state;
    const { percentScrolled, screenWidth } = this.props;
    let currentScroll = {
      backgroundColor: `rgba(250, 250, 250, ${(percentScrolled / 10).toFixed(1)})`, 
      boxShadow: `0 4px 8px 0 rgba(0, 0, 0, ${(percentScrolled / 100).toFixed(2) >= 0.4 ? 0.4 : (percentScrolled / 100).toFixed(2)})`
    };
    let toggleMobile = screenWidth <= 700;

    return (

      <div style={applyStyles(style.main, currentScroll)}>
        <span style={style.title_left}>COS<span style={style.title_right}>-BYTES</span></span>
        {
          toggleMobile
          ? <div 
              style={applyStyles(style.select_button, dropdownToggled && {backgroundColor: 'white', height: '500px',}, )}
              onClick={this.toggleDropdown}
            >
              Hi
            </div>
        
          : <div style={style.navigation_body}>
              <NavLink name={'Resume'} onClick={() => { console.log('Resume link clicked'); }}/>
              <NavLink name={'Projects'} onClick={() => { console.log('Projects link clicked'); }}/>
              <NavLink name={'Blog'} onClick={() => { console.log('Blog link clicked'); }}/>
            </div>
        }
      </div>

    );

  }
}

export default Navbar;
