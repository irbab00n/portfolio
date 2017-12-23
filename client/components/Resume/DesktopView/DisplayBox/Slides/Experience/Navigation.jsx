import React from 'react';


class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {

    const { prevClick, nextClick } = this.props;

    return (

      <div style={{
        height: '50px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div onClick={prevClick}>Prev</div>
        <div onClick={nextClick}>Next</div>
      </div>

    );

  }
}

export default Navigation;