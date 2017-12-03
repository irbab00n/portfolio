module.exports.structure = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  color: 'white',
  backgroundColor: '#263238'
};

module.exports.backgroundPicture = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '500px',
  minWidth: '1000px',
  backgroundImage: `url('http://everyinvestor.co.uk/wp-content/uploads/2016/08/shutterstock_160344044.jpg')`,
  backgroundRepeat: 'no-repeat'
};

module.exports.title = {
  alignSelf: 'flex-end',
  padding: '30px 30px 0 0',
  fontSize: '36px',
  color: 'black',
};

module.exports.titleStripe = {
  height: '3px',
  width: '100%',
  backgroundColor: '#4f83cc'
};


// Everything below this line will be moved into it's own sheet later on.  Purpose for doing so is identifying a lack separation.  I don't want to manage my state for the search bar within the jumbotron.  I feel that's something that it can be doing as it's own component.


module.exports.searchStructure = {
  alignSelf: 'flex-end',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 30px 30px 0'
};

module.exports.searchButton = {
  marginLeft: '10px',
  width: '75px',
  padding: '8px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#4CAF50',
  fontSize: '16px',
  color: 'white',
  cursor: 'pointer'
}