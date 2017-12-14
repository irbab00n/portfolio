import React from 'react';

import SkillsSlide from './Slides/SkillsSlide.jsx';
import ExperienceSlide from './Slides/ExperienceSlide.jsx';
import EducationSlide from './Slides/EducationSlide.jsx';
import LinksSlide from './Slides/LinksSlide.jsx';
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
          />
        );
      case 'experience':
        return (
          <ExperienceSlide 
          />
        );
      case 'education':
        return (
          <EducationSlide 
          />
        );
      case 'links':
        return (
          <LinksSlide 
          />
        );
      default: 
        return (
          <DefaultSlide 
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