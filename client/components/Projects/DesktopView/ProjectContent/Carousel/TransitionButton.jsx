import React from 'react';

import style from './style';


class TransitionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      clicked: false
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.renderLabel = this.renderLabel.bind(this);
  }

  clickHandler() {
    let { onClick } = this.props;
    this.setState({clicked: true}, () => {
      setTimeout(() => {
        this.setState({clicked: false}, onClick)
      }, 100);
    });
  }

  renderLabel(direction) {
    switch(direction) {
      case 'left':
        return '<';
      case 'right':
        return '>';
    }
  }

  render() {

    const { hovered, clicked } = this.state;
    const { direction, onClick, applyStyles } = this.props;

    return (

      <div 
        style={
          applyStyles(
            style.button,
            hovered && style.button_hovered,
            clicked && style.button_clicked
          )
        }
        onMouseEnter={() => this.setState({hovered: true})}
        onMouseLeave={() => this.setState({hovered: false})}
        onClick={this.clickHandler}
      >
        <center>{this.renderLabel(direction)}</center>
      </div>

    );

  }
}

export default TransitionButton;