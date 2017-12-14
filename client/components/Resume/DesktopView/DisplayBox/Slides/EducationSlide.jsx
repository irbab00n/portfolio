import React from 'react';


class Slide extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { name } = this.props;

    return (

      <div style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'rgb(250, 250, 250)'
      }}>
        {name}
      </div>

    ); 

  }
}

export default Slide;