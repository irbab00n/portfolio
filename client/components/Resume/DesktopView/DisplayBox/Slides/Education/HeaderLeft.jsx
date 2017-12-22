import React from 'react';

import style from './style';

const HeaderLeft = (props) => {

  const {
    image,
    title,
    location,
    studied
  } = props;

  return (

    <div style={style.headerLeftBody}>
      <img
        src={image}
        style={style.leftImage}
      />
      <div style={style.leftTextCluster}>
        <span style={style.leftTextTitle}>{title}</span><br/>
        <span style={style.leftTextLocation}>{location}</span><br/>
        <span style={style.leftTextStudied}>{studied}</span>
      </div>
    </div>

  );

}

export default HeaderLeft;