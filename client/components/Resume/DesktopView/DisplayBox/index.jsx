import React from 'react';

import SkillsSlide from './Slides/Skills/index.jsx';
import ExperienceSlide from './Slides/Experience/index.jsx';
import EducationSlide from './Slides/Education/index.jsx';
import LinksSlide from './Slides/Links/index.jsx';
import DefaultSlide from './Slides/Default/index.jsx';


class DisplayBox extends React.Component {
  constructor(props) {
    super(props);
    this.renderSlide = this.renderSlide.bind(this);
  }

  renderSlide(slide) {
    switch(slide) {
      case 'skills':
        return (
          <SkillsSlide
            screenWidth={this.props.screenWidth}
            screenHeight={this.props.screenHeight}
            applyStyles={this.props.applyStyles} 
          />
        );
      case 'experience':
        return (
          <ExperienceSlide
            applyStyles={this.props.applyStyles} 
          />
        );
      case 'education':
        return (
          <EducationSlide
            applyStyles={this.props.applyStyles} 
          />
        );
      case 'links':
        return (
          <LinksSlide
            applyStyles={this.props.applyStyles} 
          />
        );
      default: 
        return (
          <DefaultSlide
            applyStyles={this.props.applyStyles} 
          />
        );
    }
  }

  render() {

    const { currentSlide } = this.props;

    return (

      <div style={{
        height: '400px',
        width: '600px',
        margin: '50px 50px 50px 25px'
      }}>
        {this.renderSlide(currentSlide)}
      </div>

    );

  }
}

export default DisplayBox;