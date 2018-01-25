import React from 'react';

const Journey = (props) => {

  return (

    <div style={{
      margin: '25px 0 50px 0',
      width: '100%',
      maxWidth: '1600px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>

      <div style={{
        marginBottom: '40px',
        height: '50px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontSize: '30px',
        color: 'rgba(0, 122, 193, 1.0)',
      }}>
        <span style={{marginLeft: '50px'}}>THEN THERE WAS PROGRAMMING</span>
      </div>

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

      <div id="Journey Explaination" style={{
        marginTop: '50px',
        width: '100%',
        maxWidth: '1400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      }}>

        <div style={{
          height: '100%',
          width: '50%',
          maxWidth: '700px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          Block Left
        </div>

        <div style={{
          height: '100%',
          width: '50%',
          maxWidth: '700px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(15, 15, 15, 0.9)',
        }}>
          <a href="https://s3-us-west-1.amazonaws.com/cos-bytes.com/2D_plants.jpg" target="_blank" style={{height: '300px'}}>
            <img src="https://s3-us-west-1.amazonaws.com/cos-bytes.com/2D_plants.jpg" style={{height: '300px', objectFit: 'scale-down'}} />
          </a>
          <div style={{
            height: '50px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            fontSize: '12px'
          }}>
            <center>Above image is what grass and foliage assets look like in their planed 2D form</center>
          </div>
          <a href="https://s3-us-west-1.amazonaws.com/cos-bytes.com/2D_grass_used.jpg" target="_blank" style={{width: '100%'}}>
            <img src="https://s3-us-west-1.amazonaws.com/cos-bytes.com/2D_grass_used.jpg" style={{width: '100%', objectFit: 'scale-down'}} />
          </a>
          <div style={{
            height: '50px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            fontSize: '12px'
          }}>
            <center>This is the finished product after 3D model assets are constructed and imported into CryEngine</center>
          </div>
        </div>


      </div>

    </div>

  );

};

export default Journey;