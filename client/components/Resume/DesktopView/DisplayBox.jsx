import React from 'react';


class DisplayBox extends React.Component {
  constructor(props) {
    super(props);
    this.renderSlide = this.renderSlide.bind(this);
  }

  renderSlide(slide) {
    switch(slide) {
      case 'skills':
        return <span>Skills view</span>
      case 'experience':
        return <span>Experience view</span>
      case 'education':
        return <span>Education view</span>
      case 'links':
        return <span>Links view</span>
      default: 
        return <span>Default View</span>
    }
  }

  render() {

    const { currentSlide } = this.props;

    return (

      <div style={{
        height: '450px',
        width: '100%',
        margin: '25px 50px 25px 25px'
      }}>
        {this.renderSlide(currentSlide)}
      </div>

    );

  }
}

export default DisplayBox;