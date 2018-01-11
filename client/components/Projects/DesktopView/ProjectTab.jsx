import React from 'react';

import style from './style';


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
            Object.assign(style.tabBody, {backgroundImage: `url(${tabBackgroundImage})`}),
            hovered && Object.assign(style.tabBody_hovered, {boxShadow: `${tabHoverColor}`}),
            tabClicked && style.tabBody_clicked
          )
        }
        onMouseEnter={() => this.setState({hovered: true})}
        onMouseLeave={() => this.setState({hovered: false})}
        onClick={tabClicked ? () => {} : onClick} 
      >
        {tabText}
      </div>

    );

  }
}


export default ProjectTab;