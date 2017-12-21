import React from 'react';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {
      image,
      title,
      location,
      studied
    } = this.props;

    return (

      <div style={{
        height: '70px',
        paddingBottom: '15px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        <img
          src={image}
          style={{height: '100%', paddingRight: '15px'}}
        />
        <div style={{width: '100%', textAlign: 'right', lineHeight: '90%'}}>
          <span style={{fontSize: '24px', fontWeight: 'bold'}}>{title}</span><br/>
          <span style={{fontSize: '16px'}}>{location}</span><br/>
          <span style={{fontSize: '12px'}}>{studied}</span>
        </div>

      </div>

    );

  }
}

export default Header;