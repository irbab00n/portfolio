import React from 'react';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { reverse } = this.props;

    return (

      <div id="Header" style={{
        height: '70px',
        paddingBottom: '15px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>


        <div style={{width: '100%', textAlign: 'left'}}>
          <span style={{fontSize: '24px', fontWeight: 'bold'}}>Hack Reactor</span><br/>
          <span style={{fontSize: '16px'}}>San Francisco</span><br/>
          <span style={{fontSize: '12px'}}>Advanced Software Engineering Immersive</span>
        </div>
        <img
          src="http://static1.squarespace.com/static/522a22cbe4b04681b0bff826/t/581cc65fe4fcb5a68ecd940c/1478280803080/hrhq-avatar.png"
          style={{height: '100%', paddingRight: '15px'}}
        />


      </div>

    );

  }
}

export default Header;