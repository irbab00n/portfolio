import React from 'react';

import TitlePicture from './TitlePicture.jsx';
import ExplainationBody from './ExplainationBody.jsx';

const Journey = (props) => {

  return (

    <div style={{
      margin: '20px 0 50px 0',
      height: '100%',
      width: '100%',
      maxWidth: '1600px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>

      <ExplainationBody />

      <TitlePicture />

    </div>

  );

};

export default Journey;