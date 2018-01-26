import React from 'react';

import LeftColumn from './LeftColumn.jsx';
import RightColumn from './RightColumn.jsx';

const ExplainationBody = (props) => {

  return (

    <div id="Journey Explaination" style={{
      height: '100%',
      width: '100%',
      maxWidth: '1400px',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    }}>

      <LeftColumn />

      <RightColumn />

    </div>

  );

};

export default ExplainationBody;