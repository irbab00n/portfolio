import React from 'react';

import NavLink from './NavLink.jsx';

import applyStyles from '../../helpers/applyStyles';

import style from './navbarStyle';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownToggle: false,
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown(currentFlag) {
    this.setState({dropdownToggle: !currentFlag});
  }

  render() {

    const { dropdownToggle } = this.state;
    const { percentScrolled, screenWidth } = this.props;
    let currentScroll = {
      backgroundColor: `rgba(250, 250, 250, ${(percentScrolled / 10).toFixed(1)})`, 
      boxShadow: `0 4px 8px 0 rgba(0, 0, 0, ${(percentScrolled / 100).toFixed(2) >= 0.4 ? 0.4 : (percentScrolled / 100).toFixed(2)})`
    };
    let mobileToggle = screenWidth <= 700;

    return (

      <div style={applyStyles(style.main, currentScroll)}>

        <span style={style.title_left}>COS<span style={style.title_right}>-BYTES</span></span>

      {/* This is where the Dropdown Menu Starts */}

        <div style={{
          alignSelf: 'flex-start',
          marginTop: '10px',
          width: '150px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          WebkitTransition: '0.2s'
        }}
          onClick={() => { this.toggleDropdown(dropdownToggle); }}
        >
          <div id='current-selected' style={{
            height: '50px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white'
          }}>
            
            {
              dropdownToggle
                ? 'Open'
                : 'Closed'
            }

          </div>

          <div id='dropdown-list-body' style={applyStyles({display: 'hidden', height: '0px', width: '100%', backgroundColor: 'white', WebkitTransition: 'height 0.2s'}, dropdownToggle && {display: 'flex', height: '225px'})}>

                  <div style={applyStyles({display: 'hidden', flexDirection: 'column', alignItems: 'center', WebkitTransition: '0.2s'}, dropdownToggle && {display: 'flex'})}>
                    <span style={applyStyles({height: '75px', width: '100%', display: 'hidden', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', WebkitTransition: '0.2s'}, dropdownToggle && {display: 'flex'})}>{dropdownToggle ? 'Item 1' : ''}</span>
                    <span style={applyStyles({height: '75px', width: '100%', display: 'hidden', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', WebkitTransition: '0.2s'}, dropdownToggle && {display: 'flex'})}>{dropdownToggle ? 'Item 2' : ''}</span>
                    <span style={applyStyles({height: '75px', width: '100%', display: 'hidden', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', WebkitTransition: '0.2s'}, dropdownToggle && {display: 'flex'})}>{dropdownToggle ? 'Item 3' : ''}</span>
                  </div>
          </div>

        </div>

      {/* This is where the Dropdown Menu Ends */}
    
        <div style={style.navigation_body}>
          <NavLink name={'Resume'} onClick={() => { console.log('Resume link clicked'); }}/>
          <NavLink name={'Projects'} onClick={() => { console.log('Projects link clicked'); }}/>
          <NavLink name={'Blog'} onClick={() => { console.log('Blog link clicked'); }}/>
        </div>

      </div>

    );

  }
}

export default Navbar;
