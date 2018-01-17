import React from 'react';

import style from './style';


const TitleBlock = (props) => {

  const { currentProject } = props;

  return (
    <div style={style.titleBlockBody}>

      <div style={style.title}>
        <span style={style.titleHeader}>Project Title:</span>
        <span style={style.titleText}>{`${currentProject.title}`}</span>
      </div>

      <div style={style.description}>
        <span style={style.descriptionHeader}>Project Description:</span>
        <p style={style.descriptionText}>{`${currentProject.description}`}</p>
      </div>

      <div style={style.contributors}>
        <span style={style.contributorsHeader}>Project Contributors:</span>
        <ul style={{margin: 0}}>
          {
            currentProject.contributors.map((contributor, index) => {
              return <li key={`contrib-${index}`} style={{fontSize: '12px'}}>{contributor}</li>
            })
          }
        </ul>
      </div>
    </div>
  );

};

export default TitleBlock;