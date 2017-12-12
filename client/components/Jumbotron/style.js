module.exports.body = {
  display: 'flex',
  zIndex: '-2',
  overflow: 'hidden',
  flexDirection: 'column',
  alignItems:'center',
  justifyContent: 'center',
  height: '500px',
  width: '100%',
  background: `linear-gradient(to top, #ffffff 6%, #b3e3ff 68%)`,
  backgroundImage: 'url("https://s3-us-west-1.amazonaws.com/cos-bytes.com/backgroundClouds.png"), linear-gradient(to top, #ffffff 6%, #b3e3ff 68%)',
  fontSize: '30px',
};

module.exports.body_mobile_landscape = {
  height: '550px'
};

module.exports.body_mobile_portrait = {
  height: '800px'
};


module.exports.rightCloud = {
  position: 'relative',
  zIndex: '-1',
  top: '-200px',
  height: '100px',
  width: '500px',
  alignSelf: 'flex-end',
  // WebkitTransition: '0.1s'
};

module.exports.rightCloud_mobile_portrait = {
  top: '100px'
};


module.exports.leftCloud = {
  position: 'relative',
  zIndex: '-1',
  top: '-150px',
  height: '100px',
  width: '500px',
  alignSelf: 'flex-start',
  // WebkitTransition: '0.1s'
};

module.exports.leftCloud_mobile_portrait = {
  top: '-250px'
};


module.exports.textScroller = {
  height: '30px',
  margin: '0 15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
};

module.exports.textScroller_mobile_portrait = {
  fontSize: '42px'
};
