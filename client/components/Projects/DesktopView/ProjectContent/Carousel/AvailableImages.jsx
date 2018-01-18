import React from 'react';
import apply from 'applystyles';
import animator from 'react-css-in-js-animator';

import style from './style';


class AvailableImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shakeLeft: false,
      shakeRight: false
    };
  }

  render() {

    const { loaded, pictures, selectedCarouselIndex, onClick } = this.props;

    return (

      <div style={
        apply(
          style.availableImagesContainer,
          loaded && style.availableImagesContainer_loaded,
        )
      }>
        {
          pictures.map((picture, index) => {
            return (
              <img 
                key={`image${index}`} 
                src={picture.link} 
                style={
                  apply(
                    style.availableImageBody,
                    loaded && style.availableImageBody_loaded,
                    (loaded && index === selectedCarouselIndex) && style.availableImageBody_selected,
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