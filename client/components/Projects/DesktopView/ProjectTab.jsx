import React from 'react';


class ProjectTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      hovered: false
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    let { clicked } = this.state;
    const { tabFadeFunction } = this.props;
    this.setState({
      clicked: !clicked
    }, () => setTimeout(tabFadeFunction, 200));
  }

  render() {

    const { clicked, hovered } = this.state;
    const { tabClicked, applyStyles, onClick } = this.props;

    return (

      <div 
        style={
          applyStyles(
            {
              height: '250px',
              width: '100%',
              maxWidth: '1250px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(225, 225, 225, 1.0)',
              WebkitTransition: '0.2s'
            },
            hovered && {
              backgroundColor: 'rgba(0, 122, 193, 1.0)',
              boxShadow: 'inset 0 4px 12px 0 rgba(0, 0, 0, 0.6)',
              color: 'white'
            },
            tabClicked && {
              backgroundColor: 'rgba(225, 225, 225, 0.0)',
            }
          )
        }
        onMouseEnter={() => this.setState({hovered: true})}
        onMouseLeave={() => this.setState({hovered: false})}
        onClick={onClick}
      >
        TAB TO CLICK
      </div>

    );

  }
}


export default ProjectTab;