import React from 'react';


class DisplayBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div style={{
        height: '450px',
        width: '100%',
        margin: '25px 50px 25px 25px'
      }}>
        This section will populate with content when a link is clicked.
      </div>

    );

  }
}

export default DisplayBox;