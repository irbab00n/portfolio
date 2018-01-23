import React from 'react';

import style from './style';

const Header = (props) => {

  const { image, employmentRange, title } = props;

  return (

    <div style={style.headerLayout}>
      <img 
        src={image}
        style={style.headerImage}
      />
      <div style={style.headerTitleLayout}>
        <span style={style.headerTitleText}>{title}</span><br/>
        <span style={style.headerTitleRange}>{`${employmentRange.start} - ${employmentRange.end}`}</span>
      </div>
    </div>

  );
}


export default Header;