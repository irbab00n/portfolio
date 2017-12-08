module.exports.main = {
  position: 'fixed',
  width: '100%',
  height: '70px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  WebkitTransition: 'linear 0.1s',
  zIndex: '1'
};

module.exports.title_left = {
  cursor: 'pointer',
  marginLeft: '50px',
  padding: '0 6px',
  fontSize: '30px',
  color: 'rgba(41, 67, 78, 1.0)'
};

module.exports.title_right = {
  color: 'rgba(0, 122, 193, 1.0)'
};


module.exports.select_button = {
  alignSelf: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  height: '36px',
  width: '100px',
  margin: '17px 50px 17px',
  backgroundColor: 'rgb(179, 227, 255)',
  borderWidth: '2px',
  borderRadius: '2px',
  WebkitTransition: 'height 0.4s',
};


module.exports.navigation_body = {
  display: 'flex',
  flexDirection: 'row',
  paddingRight: '50px'
};

module.exports.navigation_link = {
  cursor: 'pointer',
  padding: '15px 30px 15px',
  fontSize: '24px',
  color: 'rgba(41, 67, 78, 1.0)',
  WebkitTransition: '0.2s'
};

module.exports.navigation_link_hovered = {
  padding: '9px 30px 15px',
  color: 'rgba(0, 122, 193, 1.0)',
  WebkitTransition: '0.2s'
};