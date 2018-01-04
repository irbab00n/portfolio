import React from 'react';

import style from './style';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      hovered: false,
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderLabel = this.renderLabel.bind(this);
  }

  handleClick() {
    let { onClick } = this.props;
    this.setState({clicked: true}, () => {
      setTimeout(() => {
        this.setState({clicked: false}, onClick)
      }, 100);
    });
  }

  renderLabel(labelType) {
    let { hovered } = this.state;
    let { label = '', applyStyles } = this.props; // initialize label to empty string if none passed in
    switch(labelType) {
      case 'image': 
        return (<img style={applyStyles(hovered && style.buttonLabel_hovered)} src={label} />);
      default:
        return label 
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true
      }); 
    }, 500);
  }

  render() {

    const { loaded, hovered, clicked } = this.state;
    const { 
      labelType,
      hoverColor = {backgroundColor: 'rgba(0, 122, 193, 1.0)'}, // initialize to blue hover color if none passed in
      onClick,
      applyStyles
    } = this.props;

    return (

      <div 
        onClick={this.handleClick}
        onMouseEnter={() => { this.setState({hovered: true}); }}
        onMouseLeave={() => { this.setState({hovered: false}); }}
        style={
          applyStyles(
            style.button,
            loaded && style.button_loaded,
            hovered && Object.assign(style.button_hovered, hoverColor),
            clicked && style.button_clicked
          )
        }
      >
        {this.renderLabel(labelType)}
      </div>

    );

  }
}

export default Button;