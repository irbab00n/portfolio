import React from 'react';

import style from './style';

const Description = (props) => {

  const { duties } = props;

  return (

    <div style={style.descriptionLayout}>
      {
        duties.map((description, i) => {
          return <span key={'description' + i} style={{paddingBottom: '15px'}}>&bull;&nbsp;{description}</span>
        })
      }
    </div>

  );

}

export default Description;