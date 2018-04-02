import React from 'react';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (

      <div style={{
        height: '200px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(236, 236, 236, 1.0)',
        padding: '15px 0'
      }}>

        <div style={{
          height: '100%',
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}>
          <div style={{
            paddingLeft: '50px',
            height: '30px',
            width: '100%',
            fontSize: '14px',
          }}>
            Email: thomas@cosbytes.com
          </div>

          <div style={{
            paddingLeft: '50px',
            height: '30px',
            width: '100%',
            fontSize: '14px',
          }}>
            <a href="https://www.linkedin.com/in/cosbyts/">Linkedin</a>
          </div>

          <div style={{
            paddingLeft: '50px',
            height: '30px',
            width: '100%',
            fontSize: '14px',
          }}>
            Github: https://github.com/irbab00n
          </div>
        </div>

      </div>

    );

  }
}

export default Contact;