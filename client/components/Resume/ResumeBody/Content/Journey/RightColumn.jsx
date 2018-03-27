import React from 'react';

const RightColumn = (props) => {

  return (

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

  );

};

export default RightColumn;