import React from 'react';
import apply from 'applystyles';

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
    let { direction, onClick } = this.props;
    let animation;
    switch(direction) {
      case 'left': 
        return () => {
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
      case 'right':
        return () => {
          this.setState({clicked: true, shakeRight: true}, () => {
            onClick();
            setTimeout(() => {
              this.setState({clicked: false, shakeRigt: false, shakeLeft: true}, () => {
                setTimeout(() => {
                  this.setState({shakeLeft: false});
                }, 100);
              });
            }, 100);
          });
        }
    }
    
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