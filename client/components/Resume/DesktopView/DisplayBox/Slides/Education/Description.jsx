import React from 'react';


const Description = (props) => {

  const { text, range } = props;

  return (

    <div style={{
      height: '100px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      fontSize: '14px'
    }}>
      <span style={{fontWeight: 'bold', paddingBottom: '15px'}}>{`${range.start} - ${range.end}`}</span>
      {text}
    </div>

  );

};

export default Description;