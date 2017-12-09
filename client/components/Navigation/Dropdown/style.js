module.exports.button = {
  alignSelf: 'flex-start',
  marginRight: '50px',
  marginTop: '10px',
  width: '150px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: '2px',
  borderRadius: '2px',
  WebkitTransition: '0.1s'
};

module.exports.currentSelection = {
  height: '50px',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  background: 'linear-gradient(to bottom, #007ac1 17%, #44aaee 83%)',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  WebkitTransition: '0.1s'
};

module.exports.currentSelection_pressed= {
  color: 'rgba(44, 53, 58, 1.0)',
  boxShadow: 'inset 0 4px 8px 4px rgba(0, 0, 0, 0.2)',
  background: 'linear-gradient(to bottom, #59a9f4 17%, #b9dff8 83%)'
};

module.exports.dropdownBody_collapsed = {
  display: 'hidden',
  height: '0px',
  width: '100%',
  backgroundColor: 'white',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4)',
  WebkitTransition: 'height 0.05s'
};

module.exports.dropdownBody_expanded = {
  display: 'flex',
  justifyContent: 'center',
  height: '225px'
};

module.exports.linkContainer_collapsed = {
  display: 'hidden',
  height: '0px',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  WebkitTransition: '0.2s'
};

module.exports.linkContainer_expanded = {
  display: 'flex',
  height: '225px'
};

module.exports.link_collapsed = {
  display: 'hidden',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  WebkitTransition: '0.2s'
};

module.exports.link_expanded = {
  display: 'flex',
  height: '75px',
  width: '100%'
};


















