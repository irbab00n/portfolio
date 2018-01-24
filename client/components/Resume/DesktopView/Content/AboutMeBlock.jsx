import React from 'react';
import apply from 'applystyles';

export default class AboutMeBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { toggleLeftOff } = this.props;

    return(

      <div style={
        apply(
          {
            marginTop: '50px',
            height: '537px',
            width: '100%',
            backgroundColor: 'rgba(245, 245, 245, 0.6)',
            boxShadow: '0 6px 12px 0 rgba(0, 0, 0, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            WebkitTransition: '0.4s'
          },
          toggleLeftOff && {backgroundColor: 'rgba(235, 235, 245, 0.0)', boxShadow: '0 6px 12px 0 rgba(0, 0, 0, 0.0)'} 
        )
      }>
        <span style={{marginTop: '30px', paddingLeft: '50px', width: '100%', fontSize: '36px'}}>ABOUT ME</span>
        <span style={{
          marginTop: '35px',
          width: '90%',
          fontSize: '14px'
        }}>
          My name is Thomas Cosby, a former gearbox technician turned software engineer.  What started out as a hobby, learning how to program very small video games in Unity turned into a deep fascination and thirst to know more.  After weeks of researching and learning more about how software is made, I knew I was going to enjoy diving deep into becoming an engineer.  I attended the Advanced Software Engineering Immersive, Hack Reactor, to learn the techniques and technologies necessary for web-based application development.<br/>
          <br/>
          After I graduated, I was selected to work for Hack Reactor as a Teaching Assistant for the next round of students.  I had to apply a mixture of my technical knowledge, team-oriented spirit, and problem solving skills to be a resource for students in need.  I hosted code and concept reviews, pair programming sessions, whiteboarding and verbalization exercises all centered around constantly improving student technical competency.  In the end, I helped train over 80 software engineers to develop with JavaScript and it's vast ecosystem of frameworks and technologies.
        </span>
      </div>

    ); 

  }
}