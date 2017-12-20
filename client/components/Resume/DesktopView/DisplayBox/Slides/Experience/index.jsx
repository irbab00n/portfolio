import React from 'react';

import style from './style';

class ExperienceSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true
      });
    }, 100)
  }

  render() {

    const { loaded } = this.state;
    const { applyStyles } = this.props;

    return (

      <div style={
        applyStyles(
          style.slideBody,
          loaded && style.slideBody_loaded
        )
      }>

        <div id="Slide Box"
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <div style={{
              height: '70px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <img 
              src="https://static1.squarespace.com/static/ta/522a22cbe4b04681b0bff826/3098/assets/images/logo/hack-reactor-logo.png" 
              style={{height: '50px'}}
            />
            <div style={{
                width: '50%',
                fontSize: '16px',
                textAlign: 'right'
              }}
            >
              <span style={{fontWeight: 'bold'}}>Software Engineering Teaching Assistant</span><br/>
              <span style={{fontSize: '14px'}}>Sept. 2017 - Present</span>
            </div>
          </div>

          <div style={{
            height: '330px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '14px'
          }}>
            <span style={{height: '25px', width: '100%'}}></span>
            &bull;&nbsp;Assisted in the instruction and growth of over 80 software engineering immersive students in JavaScript and it's expansive ecosystem of technologies and frameworks.<br/>
            <br/>
            &bull;&nbsp;Equippied students with integration strategies, coding best-practices, and debugging techniques in frameworks including ReactJS, NodeJS, and ExpressJS.<br/>
            <br/>
            &bull;&nbsp;Provided 1 on 1 coaching centered on concreting new concepts and expanding team-oriented collaboration through hosting code reviews and pair programming sessions.<br/>
          </div>

        </div>

      </div>

    ); 

  }
}



export default ExperienceSlide;