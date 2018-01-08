import React from 'react';


class ProjectTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    let { clicked } = this.state;
    this.setState({
      clicked: !clicked
    });
  }

  render() {

    const { clicked } = this.state;
    const { applyStyles } = this.props;

    return (

      <div 
        style={
          applyStyles(
            {
              position: 'absolute',
              height:'100%',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(226, 226, 226, 1.0)',
              zIndex: 1,
              WebkitTransition: '0.2s'
            },
            clicked && {
              backgroundColor: 'rgba(226, 226, 226, 0.0)',
            }
          )
        }
        onClick={this.clickHandler}
      >
        Click to reveal content below!
      </div>

    );

  }
}


export default ProjectTabs;