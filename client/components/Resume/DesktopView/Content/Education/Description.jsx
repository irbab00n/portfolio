import React from 'react';

import style from './style';

const Description = (props) => {

  const { text, range } = props;

  return (

    <div style={style.descriptionBody}>
      <span style={style.rangeAttended}>{`${range.start} - ${range.end}`}</span>
      {text}
    </div>

  );

};

export default Description;