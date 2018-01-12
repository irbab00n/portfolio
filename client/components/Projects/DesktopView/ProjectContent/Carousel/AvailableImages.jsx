import React from 'react';

import style from './style';


class AvailableImages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { pictures, selectedCarouselIndex, onClick, applyStyles } = this.props;

    return (

      <div id="Available Images" style={{
        height: '100px',
        width: '800px',
        display: 'flex',
        alignItems: 'center',
        overflowX: 'scroll',
      }}>
        {
          pictures.map((picture, index) => {
            return (
              <img 
                key={`image${index}`} 
                src={picture} 
                style={
                  applyStyles(
                    style.availableImagesBody,
                    index === selectedCarouselIndex && style.availableImagesBody_selected
                  )
                }
                onClick={() => onClick(index)}
              />
            );
          })
        }
      </div>

    );

  }
}

export default AvailableImages