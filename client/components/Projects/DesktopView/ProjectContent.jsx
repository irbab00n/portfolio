import React from 'react';


class ProjectContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      buttonClicked: false,
      buttonHoverd: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true
      });
    }, 200);
  }

  render() {

    const { loaded, buttonClicked, buttonHovered } = this.state;
    const { applyStyles, tabsClickToggleFalse } = this.props;

    return (

      <div style={{
        position: 'absolute',
        height:'100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#e2e2e2'
      }}>

         <div style={{
            height:'700px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            backgroundColor: 'rgba(25, 25, 25, 1.0)',
          }}>
            
            <div id="EXIT PROJECT BUTTON" 
              style={
                applyStyles(
                  {
                    margin: '25px 25px 0 0',
                    height: '0px',
                    width: '0px',
                    borderRadius: '25px',
                  },
                  loaded && {
                    height: '50px',
                    width: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(242, 242, 242, 1.0)',
                    zIndex: 1,
                    WebkitTransition: '0.5s'
                  },
                  buttonHovered && {
                    boxShadow: 'inset 0 0 0 1000px rgba(100, 100, 100, 0.3)',
                  },
                  buttonClicked && {
                    backgroundColor: 'rgba(242, 242, 242, 0.0)',
                    fontSize: '0px'
                  }
                )
              }
              onClick={() => this.setState({buttonClicked: true}, tabsClickToggleFalse)}
              onMouseEnter={() => this.setState({buttonHovered: true})}
              onMouseLeave={() => this.setState({buttonHovered: false})}
            >
              X
            </div>

          </div>

          <div style={{
            height:'300px',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>

            <div style={{
              height:'100%',
              width: '30%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'rgba(237, 237, 237, 1.0)',
            }}>
              Bottom-Left
            </div>

            <div style={{
              height:'100%',
              width: '70%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'rgba(232, 232, 232, 1.0)',
            }}>
              Bottom-Right
            </div>

          </div>

      </div>

    );

  }
}


export default ProjectContent;