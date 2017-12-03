import React from 'react';

import Jumbotron from '../components/Jumbotron.jsx';
import Board from '../components/Board.jsx';
import BoardRow from '../components/Boardrow.jsx';
import Square from '../components/Square.jsx';

import style from '../styles/homePageStyle';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (

      <div style={style.body}>
      </div>

    ); 

  }
}

export default HomePage;


/*

TODO:

Must create small information boxes below the jumbo tron that briefly introduce the 3 apis that I'm going to use for this particular project

*/