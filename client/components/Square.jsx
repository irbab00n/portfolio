import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        height: '10px',
        width: '10px',
        backgroundColor: 'white',
        borderWidth: '2px',
        borderStyle: 'outset',
      }
    };
    this.toggleColor = this.toggleColor.bind(this);
  }

  toggleColor() {
    let style = Object.assign({}, this.state.style);
    switch (style.backgroundColor) {
      case 'white':
        style.backgroundColor = 'red';
        style.borderStyle = 'inset';
        break;
      case 'red':
        style.backgroundColor = 'white';
        style.borderStyle = 'outset';
        break;
    }
    this.setState({
      style
    });
  }

  render() {

    const { style } = this.state;

    return (

      <span style={style} onClick={this.toggleColor}></span>

    );

  }
}

export default Square;