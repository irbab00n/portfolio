import React from 'react';


class Jumbotron extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div style={{
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        height: '500px',
        width: '100%',
        background: `linear-gradient(to bottom, #ffffff 6%, #b3e3ff 68%)`,
        fontSize: '30px',
        color: `rgba(41, 67, 78, ${(1 - (percentScrolled / 7))})`
      }}>
        {/* Install a timer that will change this message once every few seconds */}
        Welcome to my professional programming paradise
      </div>

    );

  }
}

export default Jumbotron;