import React from 'react';

const searchBoxStructureClose = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '175px',
  WebkitTransition: 'width 0.4s ease-in-out',
  transition: 'width 0.4s ease-in-out',
  backgroundColor: 'white',
};

const searchBoxStructureOpen = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '525px',
  WebkitTransition: 'width 0.4s ease-in-out',
  transition: 'width 0.4s ease-in-out',
  backgroundColor: 'white',
};

 const searchField = {
  width: '100%',
  WebkitTransition: 'width 0.4s ease-in-out',
  transition: 'width 0.4s ease-in-out',
  backgroundColor: 'white',
  padding: '8px 8px 8px 10px',
  fontSize: '16px'
};

const spyglassIcon = {
  padding: '0 3px',
  height: '30px',
  width: '30px'
};

const searchButton = {
  marginLeft: '10px',
  width: '75px',
  padding: '8px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#4CAF50',
  fontSize: '16px',
  color: 'white',
  cursor: 'pointer'
};

class ExtendingSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      term: ''
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.updateTerm = this.updateTerm.bind(this);
    this.submitTerm = this.submitTerm.bind(this);
  }

  onFocus() {
    this.setState({
      focused: true
    });
  }

  onBlur() {
    this.setState({
      focused: false
    });
  }

  updateTerm(e) {
    this.setState({
      term: e.target.value
    });
  }

  submitTerm(e) {
    if (e.key === 'Enter') {
      this.props.toggleSearched(this.state.term);
    }
  }

  render() {

    const { focused, term } = this.state; 

    return (

      <div style={focused ? searchBoxStructureOpen : searchBoxStructureClose}>
        <img 
          src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-512.png"
          style={spyglassIcon}
          onClick={() => {term === '' ? ()=>{} : this.props.toggleSearched(term)}}
        />
        <input 
          type="text" 
          style={searchField}
          onFocus={this.onFocus}
          onBlur={term === '' ? this.onBlur : ()=>{}}
          onChange={this.updateTerm}
          onKeyPress={this.submitTerm}
          placeholder="Job title..."
        />
      </div>

    );

  }
}

export default ExtendingSearchBar;