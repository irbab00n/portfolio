import React from 'react';

import style from './style';


class CurrentImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      shakeLeft: false,
      shakeRight: false
    };
    this.shakeAnimation = this.shakeAnimation.bind(this);
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({loaded: true});
      this.shakeAnimation();
    }, 200);
  }

  shakeAnimation() {
    this.setState({shakeLeft: true}, () => {
      setTimeout(() => {
        this.setState({shakeLeft: false, shakeRight: true}, () => {
          setTimeout(() => {
            this.setState({shakeRight: false}, () => {
              // setTimeout(() => {
              //   this.setState({shakeLeft: false});
              // }, 100);
            })
          }, 100);
        })
      }, 100);
    });
  }

  render() {

    const { loaded, shakeLeft, shakeRight } = this.state;
    const { image, applyStyles } = this.props;

    return (

      <div 
        style={
          applyStyles(
            style.currentImageBody,
            shakeLeft && style.currentImageBody_shakeLeft,
            shakeRight && style.currentImageBody_shakeRight
          )
        }
        onClick={this.shakeAnimation}
      >
        <img 
          src={image} 
          style={
            applyStyles(
              style.currentImage,
              loaded && style.currentImage_loaded,
              shakeLeft && style.currentImage_shakeLeft,
              shakeRight && style.currentImage_shakeRight
            )
          }
        />
      </div>

    );
  }

}

export default CurrentImage;