import React from 'react';
import apply from 'applystyles';

import style from './style';

class SkillsSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
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
    const { screenWidth, screenHeight } = this.props;

    return (

      <div style={
        apply(
          style.body,
          loaded && style.body_loaded
        )
      }>

        <div id="Highlighted Skills" style={{
          height: '100px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img src='https://s3-us-west-1.amazonaws.com/cos-bytes.com/skills_S3.png' style={{width: '100%'}}/>
        </div>

        <div id="Skills body" style={{
          height: '300px',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'spaced-evenly',
        }}>

          <div id="Strong Skills" style={{
            height: '300px',
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <div style={{
              height: '30px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{fontSize: '20px', fontWeight: 'bold'}}>Strengths</span>
            </div>
            <span style={{height: '2px', width: '100%', margin: '5px 0', backgroundColor: 'rgba(89, 89, 89, 0.2)'}}></span>
            <div style={{
              alignSelf: 'flex-start',
              paddingTop: '5px'
            }}>
              &bull;&nbsp;JavaScript<br/>
              &bull;&nbsp;ReactJS<br/>
              &bull;&nbsp;ES6 & Promises<br/>
              &bull;&nbsp;NodeJS<br/>
              &bull;&nbsp;ExpressJS<br/>
              &bull;&nbsp;MongoDB<br/>
              &bull;&nbsp;Git<br/>
              &bull;&nbsp;HTML5<br/>
              &bull;&nbsp;CSS3<br/>
            </div>
          </div>

          <div id="Experienced Skills" style={{
            height: '300px',
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{
              height: '30px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{fontSize: '20px', fontWeight: 'bold'}}>Experienced</span>
            </div>
            <span style={{height: '2px', width: '100%', margin: '5px 0', backgroundColor: 'rgba(89, 89, 89, 0.2)'}}></span>
            <div style={{
              alignSelf: 'flex-start',
              paddingTop: '5px'
            }}>
              &bull;&nbsp;AWS<br/>
              &bull;&nbsp;Redux<br/>
              &bull;&nbsp;AngularJS<br/>
              &bull;&nbsp;Jest<br/>
              &bull;&nbsp;Mocha/Chai<br/>
              &bull;&nbsp;jQuery<br/>
              &bull;&nbsp;NPM / Yarn<br/>
              &bull;&nbsp;Webpack<br/>
            </div>
          </div>

        </div>

      </div>

    ); 

  }
}

export default SkillsSlide;