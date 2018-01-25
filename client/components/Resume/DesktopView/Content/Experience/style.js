module.exports.slideBody = {
  height: '1000px',
  width: '100%',
  maxWidth: '1500px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  WebkitTransition: '0.2s'
};

module.exports.slideBody_on = {
  backgroundColor: 'rgba(250, 250, 250, 1.0)',
};


module.exports.slideLayout = {
  height: '200px',
  width: '95%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};


module.exports.headerLayout = {
  height: '90px',
  paddingBottom: '30px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

module.exports.headerImage = {
  width: '25%',
  maxWidth: '300px'
};

module.exports.headerTitleLayout = {
  width: '50%',
  fontSize: '16px',
  textAlign: 'right'
};

module.exports.headerTitleText = {
  fontWeight: 'bold'
};

module.exports.headerTitleRange = {
  fontSize: '14px'
};


module.exports.descriptionLayout = {
  marginTop: '20px',
  height: '250px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  fontSize: '14px'
};


module.exports.navigationLayout = {
  height: '50px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};



module.exports.button = {
  margin: '0 15px',
  cursor: 'pointer',
  height: '30px',
  width: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ffffff',
  borderWidth: '2px',
  borderRadius: '2px',
  borderColor: '#f2f2f2',
  fontSize: '14px',
  WebkitUserSelect: 'none',
  khtmlUserSelect: 'none',
  MozUserSelect: 'none',
  OUserSelect: 'none',
  userSelect: 'none',
  WebkitTransition: '0.2s'
};

module.exports.button_loaded = {
  boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.3)'
};

module.exports.button_hovered = {
  boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.6)',
  backgroundColor: 'rgba(0, 122, 193, 1.0)',
  color: '#f2f2f2'
};

module.exports.button_clicked = {
  boxShadow: '0 0 0 0 rgba(0, 0, 0, 0.0)',
  backgroundColor: 'rgba(0, 60, 100, 1.0)',
};