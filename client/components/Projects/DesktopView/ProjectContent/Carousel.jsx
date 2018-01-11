import React from 'react';


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (

      <div id="Carosel" style={{
        position: 'relative',
        top: '25px',
        alignSelf: 'center',
        height: '600px',
        width: '1000px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(100, 100, 100, 1.0)'
      }}>
        <div id="Left Button">
          Left Button
        </div>

        <div>

          <div id="Current Image">
            Current Image
          </div>

          <div id="Available Images">
            Available images
          </div>

        </div>

        <div id="Right Button">
          Right Button
        </div>
      </div>

    );

  }
}

export default Carousel;