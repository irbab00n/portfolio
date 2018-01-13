import React from 'react';

import TransitionButton from './TransitionButton.jsx';
import CurrentImage from './CurrentImage.jsx';
import AvailableImages from './AvailableImages.jsx';

import style from './style';


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCarouselIndex: 0,
      pictures: [
        'https://s3-us-west-1.amazonaws.com/cos-bytes.com/vagabondly_fleshed.png',
        'https://s3-us-west-1.amazonaws.com/cos-bytes.com/vagabondly_skeleton.png',
        'https://s3-us-west-1.amazonaws.com/cos-bytes.com/vagabondly_trips.png',
        'https://s3-us-west-1.amazonaws.com/cos-bytes.com/vagabondly_skeleton.png',
        'https://s3-us-west-1.amazonaws.com/cos-bytes.com/vagabondly_fleshed.png',
        'https://s3-us-west-1.amazonaws.com/cos-bytes.com/vagabondly_trips.png',
        'https://s3-us-west-1.amazonaws.com/cos-bytes.com/vagabondly_fleshed.png',
        'https://s3-us-west-1.amazonaws.com/cos-bytes.com/vagabondly_skeleton.png',
        'https://s3-us-west-1.amazonaws.com/cos-bytes.com/vagabondly_trips.png',
      ]
    };
    this.incrementCarouselIndex = this.incrementCarouselIndex.bind(this);
    this.decrementCarouselIndex = this.decrementCarouselIndex.bind(this);
    this.updateCarouselIndex = this.updateCarouselIndex.bind(this);
  }

  incrementCarouselIndex() {
    let { selectedCarouselIndex, pictures } = this.state;
    let nextIndex = selectedCarouselIndex + 1;
    if (nextIndex < pictures.length) {
      this.setState({
        selectedCarouselIndex: nextIndex
      });
    }
  }

  decrementCarouselIndex() {
    let { selectedCarouselIndex, pictures } = this.state;
    let previousIndex = selectedCarouselIndex - 1;
    if (previousIndex >= 0) {
      this.setState({
        selectedCarouselIndex: previousIndex
      });
    }
  }

  updateCarouselIndex(index) {
    this.setState({
      selectedCarouselIndex: index
    });
  }

  render() {

    const { selectedCarouselIndex, pictures } = this.state;
    const { loaded, applyStyles } = this.props;

    return (

      <div style={{
        position: 'relative',
        top: '25px',
        alignSelf: 'center',
        height: '600px',
        width: '1000px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>

        <TransitionButton 
          direction={'left'}
          selectedCarouselIndex={selectedCarouselIndex}
          onClick={this.decrementCarouselIndex}
          applyStyles={applyStyles}
        />        

        <div style={{
          height: '100%',
          width: '800px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>

          <CurrentImage 
            loaded={loaded}
            image={pictures[selectedCarouselIndex]}
            applyStyles={applyStyles}
          />

          <AvailableImages
            loaded={loaded}
            pictures={pictures}
            selectedCarouselIndex={selectedCarouselIndex}
            onClick={this.updateCarouselIndex}
            applyStyles={applyStyles}
          />

        </div>

        <TransitionButton 
          direction={'right'}
          selectedCarouselIndex={selectedCarouselIndex}
          onClick={this.incrementCarouselIndex}
          applyStyles={applyStyles}
        />  

      </div>

    );

  }
}

export default Carousel;