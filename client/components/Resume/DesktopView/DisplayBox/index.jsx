import React from 'react';

import SkillsSlide from './Slides/SkillsSlide.jsx';
import ExperienceSlide from './Slides/ExperienceSlide.jsx';
import EducationSlide from './Slides/EducationSlide.jsx';
import LinksSlide from './Slides/LinksSlide.jsx';
import DefaultSlide from './Slides/DefaultSlide.jsx';


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
            name={'Skills'}
          />
        );
      case 'experience':
        return (
          <ExperienceSlide 
            name={'Experience'}
          />
        );
      case 'education':
        return (
          <EducationSlide 
            name={'Education'}
          />
        );
      case 'links':
        return (
          <LinksSlide 
            name={'Links'}
          />
        );
      default: 
        return (
          <DefaultSlide 
            name={'Default'}
          />
        );
    }
  }

  render() {

    const { currentSlide } = this.props;

    return (

      <div style={{
        height: '450px',
        width: '600px',
        margin: '25px 50px 25px 25px'
      }}>
        {this.renderSlide(currentSlide)}
      </div>

    );

  }
}

export default DisplayBox;