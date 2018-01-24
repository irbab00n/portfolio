import React from 'react';
import apply from 'applystyles';

import Skills from './Skills/index.jsx';
import Experience from './Experience/index.jsx';
import Education from './Education/index.jsx';

import style from './style';

class DesktopView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { screenWidth, screenHeight, yOffset } = this.props;

    let toggleLeftOff = screenWidth <= 1420;

    return (

      <div style={
        apply(
          style.desktopBody
        )
      }>
        <div style={{
          height: '0px',
          position: 'relative',
          top: '200px',
          left: 0
        }}>
          <img src="http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Cloud-PNG-Transparent-Image.png" style={{height: '1500px'}}/>
        </div>
        <div id="Skills Component" style={
          apply(
            {
              height: '400px',
              width: '100%',
              // backgroundColor: 'rgba(235, 235, 245, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              zIndex: 1
            }
          )
        }>
          <div style={{
            width: '100%',
            maxWidth: '1600px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              height: '400px',
              width: '100%',
              maxWidth: '500px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <img src="https://s3-us-west-1.amazonaws.com/cos-bytes.com/jsLogo_619x619.jpg" style={{height: '100px', margin: '50px 0 25px 0'}}/>
              <span style={{
                fontSize: '30px'
              }}>
                JavaScript
              </span>
              <div>

              </div>
            </div>

            <div style={{
              height: '400px',
              width: '100%',
              maxWidth: '500px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <img src="https://s3-us-west-1.amazonaws.com/cos-bytes.com/nodeExpress.png" style={{height: '100px', margin: '50px 0 25px 0'}}/>
              <span style={{
                fontSize: '30px'
              }}>
                Node & Express
              </span>
              <div>

              </div>
            </div>

            <div style={{
              height: '400px',
              width: '100%',
              maxWidth: '500px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <img src="https://s3-us-west-1.amazonaws.com/cos-bytes.com/jsLogo_619x619.jpg" style={{height: '100px', margin: '50px 0 25px 0'}}/>
              <span style={{
                fontSize: '30px'
              }}>
                JavaScript
              </span>
              <div>

              </div>
            </div>
          </div>
        </div>

        <div id="Resume Content" style={{
          height: '1050px',
          width: '100%',
          // backgroundColor: 'rgba(255, 255, 255, 1.0)',
          backgroundRepeat: 'repeat-y',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
          <div style={{
            height: '100%',
            width: '100%',
            minWidth : '400px',
            maxWidth: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 1
          }}>

            <div style={
              apply(
                {
                  height: '463px',
                  width: '100%',
                  backgroundColor: 'rgba(235, 235, 245, 0.4)',
                  boxShadow: '0 6px 12px 0 rgba(0, 0, 0, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  WebkitTransition: '0.4s',
                  zIndex: 1
                },
                toggleLeftOff && {backgroundColor: 'rgba(235, 235, 245, 0.0)', boxShadow: '0 6px 12px 0 rgba(0, 0, 0, 0.0)'}
              )
            }>
              <img 
                src="https://s3-us-west-1.amazonaws.com/cos-bytes.com/headshot.jpg"
                style={
                  apply(
                    style.image
                  )
                }
              />
              <div style={{
                marginTop: '32px',
                height: '100px',
                width: '100%',
                backgroundColor: 'rgba(235, 235, 245, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                Links
              </div>
            </div>

            <div style={
              apply(
                {
                  marginTop: '50px',
                  height: '537px',
                  width: '100%',
                  backgroundColor: 'rgba(235, 235, 245, 0.4)',
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
                Hello everyone!  My name is Thomas Cosby, a former gearbox technician turned software engineer.  What started out as a hobby, learning how to program very small video games in Unity, turned into a fascination of how we been able to build programs that connect the world in so many ways and impacts our daily lives on such a fundamental level.  After weeks of researching and learning more about how software is made, I knew I was going to enjoy diving deep into becoming an engineer.  I attended the Advanced Software Engineering Immersive, Hack Reactor, to learn the techniques and technologies necessary for web-based application development.<br/>
                <br/>
                After I graduated, I was selected to work for Hack Reactor as a Teaching Assistant for the next round of students.  I had to apply a mixture of my technical knowledge, team-oriented spirit, and problem solving skills to be a resource for students in need.  I hosted code and concept reviews, pair programming sessions, whiteboarding and verbalization exercises all centered around constantly improving student technical competency.  In the end, I helped train over 80 software engineers to develop with JavaScript and it's vast ecosystem of frameworks and technologies.
              </span>
            </div>

          </div>

          <div style={{
            alignSelf: 'flex-start',
            height: '1050px',
            width: '100%',
            minWidth : '600px',
            maxWidth: '900px',
            backgroundColor: 'rgba(235, 235, 245, 0.4)',
            boxShadow: '0 6px 12px 0 rgba(0, 0, 0, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            zIndex: 1
          }}>
            <span style={{paddingLeft: '50px', width: '100%', fontSize: '36px', }}>EXPERIENCE</span>
            <Experience />
            <span style={{paddingLeft: '50px', width: '100%', fontSize: '36px'}}>EDUCATION</span>
            <Education />
          </div>
        </div>

        



      </div>

    );

  }
}


export default DesktopView;