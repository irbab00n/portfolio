import React from 'react';

import BoardRow from './BoardRow.jsx';

import buildBoard from './buildRow';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (

      <div>
        {
          buildBoard((this.props.size || 0), <BoardRow size={this.props.size || 0}/>)
        }
      </div>

    );

  }
}

export default Board;