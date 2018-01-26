import React from 'react';

const TitlePicture = (props) => {

  return (

    <div style={{
      marginTop: '50px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <div id="Journey Row" style={{
        height: '450px',
        width: '100%',
        maxWidth: '1400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(15, 15, 15, 0.9)',
      }}>
        <a href="https://s3-us-west-1.amazonaws.com/cos-bytes.com/cryEngine.jpg" target="_blank" style={{height: '100%'}}>
          <img src="https://s3-us-west-1.amazonaws.com/cos-bytes.com/cryEngine.jpg" style={{height: '100%'}} />
        </a>
      </div>

      <div style={{
        height: '50px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '16px'
      }}>
        One of many scenes I hand-composed inside of CryEngine using a programatically generated terrain map
      </div>
    </div>

  );

};

export default TitlePicture;