import React from 'react';

import ExtendingSearchBar from './ExtendingSearchBar.jsx';

import style from '../styles/jumbotronStyle';

class Jumbotron extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {

    return (

      <div style={style.structure}>
        <span style={style.titleStripe}/>
        <div style={style.backgroundPicture}>
          <div style={style.title}>TAKING THE 'ish' OUT OF THE JOB SEARCH</div>
          <div style={style.searchStructure}>
            <ExtendingSearchBar toggleSearched={this.props.toggleSearched}/>
          </div>
        </div>
        <span style={style.titleStripe}/>
      </div>

    );

  }
}

export default Jumbotron;

// REFACTOR BUTTON INTO SEARCH BAR