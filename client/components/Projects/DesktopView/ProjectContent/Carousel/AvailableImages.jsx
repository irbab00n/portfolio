import React from 'react';

import style from './style';


class AvailableImages extends React.Component {
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
    }, 250);
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
    const { pictures, selectedCarouselIndex, onClick, applyStyles } = this.props;

    return (

      <div style={
        applyStyles(
          style.availableImagesContainer,
          loaded && style.availableImagesContainer_loaded,
          shakeLeft && style.availableImagesContainer_shakeLeft,
          shakeRight && style.availableImagesContainer_shakeRight
        )
      }>
        {
          pictures.map((picture, index) => {
            return (
              <img 
                key={`image${index}`} 
                src={picture} 
                style={
                  applyStyles(
                    style.availableImageBody,
                    loaded && style.availableImageBody_loaded,
                    index === selectedCarouselIndex && style.availableImageBody_selected,
                    shakeLeft && style.availableImageBody_shakeLeft,
                    shakeRight && style.availableImageBody_shakeRight
                  )
                }
                onClick={
                  () => {
                    onClick(index);
                    this.shakeAnimation();
                  }
                }
              />
            );
          })
        }
      </div>

    );

  }
}

export default AvailableImages