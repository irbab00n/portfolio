import React from 'react';
import apply from 'applystyles';
import animator from 'react-css-in-js-animator';

import style from './style';


class TransitionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      clicked: false,
      shakeLeft: false,
      shakeRight: false
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.renderLabel = this.renderLabel.bind(this);
  }

  clickHandler() {
    let { onClick } = this.props;
    let frame1 = new animator.keyframe({clicked: true, shakeLeft: true}, 0);
    let frame2 = new animator.keyframe({clicked: false, shakeLeft: false, shakeRight: true}, 100);
    let frame3 = new animator.keyframe({shakeRight: false});
    let reel = animator.buildReel(this.setState.bind(this), onClick, frame1, frame2, frame3);
    reel();
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

    const { hovered, clicked, shakeRight, shakeLeft } = this.state;
    const { direction, selectedPictureIndex } = this.props;

    return (

      <div 
        style={
          apply(
            style.button,
            hovered && style.button_hovered,
            clicked && style.button_clicked,
            shakeLeft && style.button_animateLeft,
            shakeRight && style.button_animateRight
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