import React from 'react';


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (

      <div style={{
        position: 'relative',
        top: '25px',
        alignSelf: 'center',
        height: '600px',
        width: '1000px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div id="Left Button" style={{
          height: '100px',
          width: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(150, 150, 150, 1.0)'
        }}>
          <center>Left Button</center>
        </div>

        <div style={{
          height: '100%',
          width: '800px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>

          <div id="Current Image" style={{
            height: '500px',
            width: '800px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(125, 125, 125, 1.0)'
          }}>
            Current Image
          </div>

          <div id="Available Images" style={{
            height: '100px',
            width: '800px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(120, 120, 120, 1.0)'
          }}>
            Available images
          </div>

        </div>

        <div id="Right Button" style={{
          height: '100px',
          width: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(150, 150, 150, 1.0)'
        }}>
          <center>Right Button</center>
        </div>
      </div>

    );

  }
}

export default Carousel;