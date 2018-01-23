import React from 'react';

import style from './style';

const HeaderRight = (props) => {

  const {
    image,
    title,
    location,
    studied
  } = props;

  return (

    <div style={style.headerRightBody}>
      <div style={style.rightTextCluster}>
        <span style={style.rightTextTitle}>{title}</span><br/>
        <span style={style.rightTextLocation}>{location}</span><br/>
        <span style={style.rightTextStudied}>{studied}</span>
      </div>
      <img
        src={image}
        style={style.rightImage}
      />
    </div>

  );

}

export default HeaderRight;