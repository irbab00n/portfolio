module.exports.body = {
  display: 'flex',
  overflow: 'hidden',
  flexDirection: 'column',
  alignItems:'center',
  justifyContent: 'center',
  height: '1000px',
  width: '100%',
  background: `linear-gradient(to top, #ffffff 0%, #b3e3ff 48%)`,
  backgroundImage: 'url("https://s3-us-west-1.amazonaws.com/cos-bytes.com/backgroundClouds.png"), linear-gradient(to top, #ffffff 6%, #b3e3ff 68%)',
  fontSize: '30px',
};

module.exports.body_mobile_landscape = {

};

module.exports.body_mobile_portrait = {
  height: '800px'
};


module.exports.rightCloud = {
  position: 'relative',
  zIndex: '1',
  top: '-100px',
  height: '200px',
  width: '1000px',
  alignSelf: 'flex-end',
  WebkitUserSelect: 'none',
  khtmlUserSelect: 'none',
  MozUserSelect: 'none',
  OUserSelect: 'none',
  userSelect: 'none',
};

module.exports.rightCloud_mobile_portrait = {
  top: '100px'
};


module.exports.leftCloud = {
  position: 'relative',
  zIndex: '1',
  top: '-150px',
  height: '100px',
  width: '500px',
  alignSelf: 'flex-start',
  WebkitUserSelect: 'none',
  khtmlUserSelect: 'none',
  MozUserSelect: 'none',
  OUserSelect: 'none',
  userSelect: 'none',
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
  color: 'rgba(41, 67, 78, 1.0)',
  zIndex: 2,
};

module.exports.textScroller_mobile_portrait = {
  fontSize: '42px'
};















