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
    let { screenWidth, screenHeight, triggeredOn } = this.props;
    switch(slide) {
      case 'skills':
        return (
          <SkillsSlide
            screenWidth={screenWidth}
            screenHeight={screenHeight}
            triggeredOn={triggeredOn}
          />
        );
      case 'experience':
        return (
          <ExperienceSlide 
            triggeredOn={triggeredOn}
          />
        );
      case 'education':
        return (
          <EducationSlide
            triggeredOn={triggeredOn}
          />
        );
      case 'links':
        return (
          <LinksSlide 
            triggeredOn={triggeredOn}
          />
        );
      default: 
        return (
          <DefaultSlide 
            triggeredOn={triggeredOn}
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