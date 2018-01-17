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
      reset: false,
    };
    this.incrementCarouselIndex = this.incrementCarouselIndex.bind(this);
    this.decrementCarouselIndex = this.decrementCarouselIndex.bind(this);
    this.updateCarouselIndex = this.updateCarouselIndex.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.loaded && this.state.selectedCarouselIndex > 0) {
      this.setState({
        selectedCarouselIndex: 0
      });
    }
  }

  incrementCarouselIndex() {
    let { selectedCarouselIndex } = this.state;
    let { pictures } = this.props;
    let nextIndex = selectedCarouselIndex + 1;
    if (nextIndex < pictures.length) {
      this.setState({
        selectedCarouselIndex: nextIndex
      });
    }
  }

  decrementCarouselIndex() {
    let { selectedCarouselIndex } = this.state;
    let { pictures } = this.props;
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

    const { selectedCarouselIndex } = this.state;
    const { pictures, loaded } = this.props;

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
          loaded={loaded}
          direction={'left'}
          selectedCarouselIndex={selectedCarouselIndex}
          onClick={this.decrementCarouselIndex}
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
          />

          <AvailableImages
            loaded={loaded}
            pictures={pictures}
            selectedCarouselIndex={selectedCarouselIndex}
            onClick={this.updateCarouselIndex}
          />

        </div>

        <TransitionButton
          loaded={loaded}
          direction={'right'}
          selectedCarouselIndex={selectedCarouselIndex}
          onClick={this.incrementCarouselIndex}
        />  

      </div>

    );

  }
}

export default Carousel;