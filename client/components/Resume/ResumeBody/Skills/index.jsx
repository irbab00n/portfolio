import React from 'react';
import apply from 'applystyles';

import SkillCard from './SkillCard.jsx';

import style from './style';
import skillsData from './skillsData';



const Skills = (props) => {

  const { screenWidth, screenHeight } = props;

  return (

    <div style={
      apply(
        style.skillsList_container
      )
    }>
      <div style={
        apply(
          style.skillsList_grid
        )
      }>
        {
          skillsData.top.map(skill => {
            return (
              <SkillCard
                key={skill.title}
                image={skill.image}
                title={skill.title}
                description={skill.element}
              />
            );
          })
        }
      </div>

      <div style={
        apply(
          style.skillsList_grid
        )
      }>
        {
          skillsData.bottom.map(skill => {
            return (
              <SkillCard
                key={skill.title}
                image={skill.image}
                title={skill.title}
                description={skill.element}
              />
            );
          })
        }
      </div>
    </div>

  ); 

};

export default Skills;