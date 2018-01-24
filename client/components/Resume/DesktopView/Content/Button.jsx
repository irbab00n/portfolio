import React from 'react';
import apply from 'applystyles';


export default class Button extends React.Component {
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
    let { label = '' } = this.props; // initialize label to empty string if none passed in
    switch(labelType) {
      case 'image': 
        return (<img style={apply(
          {height: '50px', objectFit: 'scale-down'}, hovered && {
          WebkitFilter: 'invert(1)',
          filter: 'invert(1)',
        })} src={label} />);
      default:
        return label;
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
    } = this.props;

    return (

      <div 
        onClick={this.handleClick}
        onMouseEnter={() => { this.setState({hovered: true}); }}
        onMouseLeave={() => { this.setState({hovered: false}); }}
        style={
          apply(
            {
              margin: '0 10px',
              cursor: 'pointer',
              height: '46px',
              width: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(250, 250, 250, 1.0)',
              borderWidth: '2px',
              borderRadius: '2px',
              borderColor: '#f2f2f2',
              fontSize: '14px',
              WebkitUserSelect: 'none',
              khtmlUserSelect: 'none',
              MozUserSelect: 'none',
              OUserSelect: 'none',
              userSelect: 'none',
              WebkitTransition: '0.2s'
            },
            loaded && {
              boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.3)'
            },
            hovered && Object.assign({
              boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.6)',
              // backgroundColor: 'rgba(0, 122, 193, 1.0)',
              color: '#f2f2f2'
            }, hoverColor),
            clicked && {
              boxShadow: '0 0 0 0 rgba(0, 0, 0, 0.0)',
              backgroundColor: 'rgba(0, 60, 100, 1.0)',
            }
          )
        }
      >
        {this.renderLabel(labelType)}
      </div>

    );

  }
}