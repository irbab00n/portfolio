import React from 'react';
import apply from 'applystyles';

import ImageBlock from './ImageBlock.jsx';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return(

      <div style={{
        marginBottom: '50px',
        height: '550px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        boxShadow: '0 6px 12px 0 rgba(0, 0, 0, 0.1)',
        zIndex: 1
      }}>

        <div style={{
          alignSelf: 'center',
          marginTop: '30px',
          height: '100px',
          width: '100%',
          maxWidth: '1600px',
          display: 'flex',
          alignItems: 'center',
          fontSize: '60px',
          color: 'rgba(0, 122, 193, 1.0)',
        }}>
          <span style={{marginLeft: '50px'}}>ABOUT ME</span>
        </div>


        <div style={{
          alignSelf: 'center',
          height: '550px',
          width: '100%',
          maxWidth: '1500px',
          display: 'flex',
        }}>

          <ImageBlock />

          <div style={
            apply(
              {
                width: '100%',
                display: 'flex',
                WebkitTransition: '0.4s'
              }
            )
          }>
            <span style={{
              marginTop: '30px',
              width: '95%',
              fontSize: '16px',
              lineHeight: '1.5'
            }}>
              My name is Thomas Cosby, a former gearbox technician turned software engineer.  What started out as a hobby, learning how to program very small video games in Unity turned into a deep fascination and thirst to know more.  After weeks of researching and learning more about how software is made, I knew I was going to enjoy diving deep into becoming an engineer.  I attended the Advanced Software Engineering Immersive, Hack Reactor, to learn the techniques and technologies necessary for web-based application development.<br/>
              <br/>
              After I graduated, I was selected to work for Hack Reactor as a Teaching Assistant for the next round of students.  I had to apply a mixture of my technical knowledge, team-oriented spirit, and problem solving skills to be a resource for students in need.  I hosted code and concept reviews, pair programming sessions, whiteboarding and verbalization exercises all centered around constantly improving student technical competency.  In the end, I helped train over 80 software engineers to develop with JavaScript and it's vast ecosystem of frameworks and technologies.
            </span>
          </div>

        </div>

      </div>

    ); 

  }
}