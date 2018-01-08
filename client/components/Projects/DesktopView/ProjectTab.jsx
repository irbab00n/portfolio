import React from 'react';


class ProjectTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  clickHandler() {
    let { clicked } = this.state;
    this.setState({
      clicked: !clicked
    });
  }

  render() {

    return (

      <div style={{
        height: '250px',
        width: '100%',
        maxWidth: '1250px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(225, 225, 225, 1.0)',
        WebkitTransition: '0.2s'
      }}>
        TAB TO CLICK
      </div>

    );

  }
}


export default ProjectTab;