import React from 'react';


class LinkColumn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div style={{
        height: '450px',
        width: '200px',
        padding: '25px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'
      }}>
        <span>Skills</span>
        <span>Experience</span>
        <span>Education</span>
        <span>Links</span>
      </div>

    );

  }
}

export default LinkColumn;