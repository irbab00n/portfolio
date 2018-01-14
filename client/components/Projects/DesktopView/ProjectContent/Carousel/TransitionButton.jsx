import React from 'react';
import apply from 'applystyles';

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
    this.setState({clicked: true, shakeLeft: true}, () => {
      onClick();
      setTimeout(() => {
        this.setState({clicked: false, shakeLeft: false, shakeRight: true}, () => {
          setTimeout(() => {
            this.setState({shakeRight: false});
          }, 100);
        });
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
    const { direction, selectedPictureIndex } = this.props;

    return (

      <div 
        style={
          apply(
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