import React from 'react';

import Square from './Square.jsx';

import buildRow from './buildRow';

class BoardRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        {
          buildRow((this.props.size || 0), <Square />)
        }
      </div>

    );

  }
}

export default BoardRow;