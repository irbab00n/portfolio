import React from 'react';


class DefaultSlide extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(250, 250, 250)'
      }}>
        <center>This is the default view.  This will be open by default, and will be toggled back to.</center>
      </div>

    ); 

  }
}

export default DefaultSlide;