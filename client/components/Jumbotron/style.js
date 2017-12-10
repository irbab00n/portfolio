module.exports.body = {
  display: 'flex',
  zIndex: '-2',
  overflow: 'hidden',
  flexDirection: 'column',
  alignItems:'center',
  justifyContent: 'space-evenly',
  height: '500px',
  width: '100%',
  background: `linear-gradient(to bottom, #ffffff 6%, #b3e3ff 68%)`,
  fontSize: '30px',
};

module.exports.rightCloud = {
  zIndex: '-1',
  marginTop: '-400px',
  height: '100px',
  width: '500px',
  alignSelf: 'flex-end',
  WebkitTransition: '0.1s'
};

module.exports.leftCloud = {
  zIndex: '-1',
  height: '100px',
  width: '500px',
  alignSelf: 'flex-start',
  WebkitTransition: '0.1s'
};