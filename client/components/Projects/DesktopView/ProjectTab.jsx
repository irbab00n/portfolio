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
    const { 
      tabClicked,
      tabHoverColor = 'inset 0 0 0 1000px rgba(225, 225, 225, 0.3)',
      tabBackgroundImage = '',
      tabText = '',
      applyStyles,
      onClick 
    } = this.props;

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
              boxShadow: 'inset 0 0 0 1000px rgba(100, 100, 100, 0.3)',
              background: 'rgba(225, 225, 225, 1.0)',
              backgroundSize: 'cover',
              backgroundImage: `url(${tabBackgroundImage})`,
              WebkitTransition: '0.5s'
            },
            hovered && {
              boxShadow: `${tabHoverColor}`,
              opactiy: '0.8',
              color: 'white'
            },
            tabClicked && {
              height: '0px',
              fontSize: '0px'
            }
          )
        }
        onMouseEnter={() => this.setState({hovered: true})}
        onMouseLeave={() => this.setState({hovered: false})}
        onClick={onClick}
      >
        {tabText}
      </div>

    );

  }
}


export default ProjectTab;