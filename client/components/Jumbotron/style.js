module.exports.body = {
  display: 'flex',
  zIndex: '-2',
  overflow: 'hidden',
  flexDirection: 'column',
  alignItems:'center',
  justifyContent: 'center',
  height: '500px',
  width: '100%',
  background: `linear-gradient(to bottom, #ffffff 6%, #b3e3ff 68%)`,
  backgroundImage: 'url("https://s3-us-west-1.amazonaws.com/cos-bytes.com/backgroundClouds.png"), linear-gradient(to bottom, #ffffff 6%, #b3e3ff 68%)',
  fontSize: '30px',
};

module.exports.rightCloud = {
  position: 'relative',
  zIndex: '-1',
  top: '-300px',
  height: '100px',
  width: '500px',
  alignSelf: 'flex-end',
  WebkitTransition: '0.1s'
};

module.exports.leftCloud = {
  position: 'relative',
  zIndex: '-1',
  top: '-100px',
  height: '100px',
  width: '500px',
  alignSelf: 'flex-start',
  WebkitTransition: '0.1s'
};