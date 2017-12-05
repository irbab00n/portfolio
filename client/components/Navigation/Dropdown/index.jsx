import React from 'react';

import applyStyles from '../../../helpers/applyStyles';

class Dropdown extends React.Component {
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

    return (

      <div style={{
        alignSelf: 'flex-start',
        marginRight: '50px',
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

        <div id='dropdown-list-body' style={applyStyles({display: 'hidden', height: '0px', width: '100%', backgroundColor: 'white', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4)', WebkitTransition: 'height 0.2s'}, dropdownToggle && {display: 'flex', height: '225px'})}>

          <div style={applyStyles({display: 'hidden', flexDirection: 'column', alignItems: 'center', WebkitTransition: '0.2s'}, dropdownToggle && {display: 'flex'})}>
            <span style={applyStyles({height: '75px', width: '100%', display: 'hidden', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', WebkitTransition: '0.2s'}, dropdownToggle && {display: 'flex'})}>{dropdownToggle ? 'Item 1' : ''}</span>
            <span style={applyStyles({height: '75px', width: '100%', display: 'hidden', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', WebkitTransition: '0.2s'}, dropdownToggle && {display: 'flex'})}>{dropdownToggle ? 'Item 2' : ''}</span>
            <span style={applyStyles({height: '75px', width: '100%', display: 'hidden', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', WebkitTransition: '0.2s'}, dropdownToggle && {display: 'flex'})}>{dropdownToggle ? 'Item 3' : ''}</span>
          </div>
          
        </div>

      </div>

    );

  }
}

export default Dropdown;