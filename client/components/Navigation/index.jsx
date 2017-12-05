import React from 'react';

import Title from './Title/index.jsx';
import Dropdown from './Dropdown/index.jsx';
import LinkRow from './LinkRow/index.jsx';

import applyStyles from '../../helpers/applyStyles';

import style from './navbarStyle';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const { percentScrolled, screenWidth } = this.props;
    let currentScroll = {
      backgroundColor: `rgba(250, 250, 250, ${(percentScrolled / 10).toFixed(1)})`, 
      boxShadow: `0 4px 8px 0 rgba(0, 0, 0, ${(percentScrolled / 100).toFixed(2) >= 0.4 ? 0.4 : (percentScrolled / 100).toFixed(2)})`
    };
    let mobileToggle = screenWidth < 700;

    return (

      <div style={applyStyles(style.main, currentScroll)}>

        <Title />

        {
          mobileToggle
            ? <Dropdown />
            : <LinkRow />
        }

      </div>

    );

  }
}

export default Navbar;
