import React from 'react';

const Origins = (props) => {

  return (

    <div id="Origins body" style={{
      height: '950px',
      width: '100%',
      maxWidth: '1600px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>

      <div id="Title" style={{
        marginBottom: '30px',
        height: '50px',
        width: '100%',
        maxWidth: '1600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        fontSize: '30px',
        color: 'rgba(0, 122, 193, 1.0)',
      }}>
        <span style={{marginRight: '50px'}}>WHERE I COME FROM</span>
      </div>

      <div id="Welding Row" style={{
        height: '450px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>

        <div id="Welding Text" style={{
          height: '400px',
          width: '100%',
          minWidth: '450px',
          maxWidth: '1000px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
        }}>

          <span style={{alignSelf: 'flex-start', margin: '0 0 20px 20px', fontSize: '44px'}}>In 2014,</span>
          <div style={{
            width: '95%',
            fontSize: '16px',
            lineHeight: '1.5'
          }}>
            You could find me welding new floor panels into large commercial waste containers.  I was a roll-off repair specialist for a national waste management company.  I got to do a lot of painting, a lot of torch cutting, and a lot of welding.  Unsurprisingly, the bottom of a waste container isn't known for being the greatest work environment and often times I feared what might be happening to my long-term health.  Outside of the deep personal satisfaction I got from using my hands to build things, I realized that the work wasn't rewarding enough to make significant forward progress in my life.
          </div>

        </div>

        <div id="Welding Picture" style={{
          height: '400px',
          width: '100%',
          maxWidth: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(15, 15, 15, 0.9)',
        }}>
          <img src="https://s3-us-west-1.amazonaws.com/cos-bytes.com/welder.jpg" style={{
            width: '400px',
            objectFit: 'scale-down'
          }}/>
        </div>

      </div>


      <div id="Eisenbeiss Row" style={{
        height: '450px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>

        <div id="Eisenbeiss Photo" style={{
          height: '400px',
          width: '100%',
          maxWidth: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(15, 15, 15, 0.9)',
        }}>
          <img src="https://s3-us-west-1.amazonaws.com/cos-bytes.com/gearbox.jpg" style={{
            width: '400px',
            objectFit: 'scale-down'
          }}/>
        </div>

        <div id="Eisenbeiss Text" style={{
          height: '400px',
          width: '100%',
          minWidth: '450px',
          maxWidth: '1000px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
        }}>

          <span style={{
            alignSelf: 'flex-start',
            width: '100%',
            margin: '0 0 20px 20px',
            fontSize: '44px'
          }}>
            The gears started turning
          </span>

          <div style={{
            width: '95%',
            fontSize: '16px',
            lineHeight: '1.5'
          }}>
            Working for Eisenbeiss was one of best experiences of my life.  When I entered the company, my main responsibility was to degrease, clean, and recondition parts.  Over a couple months I was able to use resources available to teach myself how to read technical drawings and created the opportunity to advance within the company.  Soon enough, I would be re-assembling gearboxes that in a few short months would be shepherding commuters on the light-rail system in St. Louis, MI.  The next would be a machine fresh off the potato chip extrusion line from Frito-Lay, due for a service.  The work was great because my creative mind was stimulated and my hands were busy building.  Every new gearbox was a new puzzle to solve, and I loved it.  It was during this time when a personal hobby turned into an exciting new career prospect.
          </div>

        </div>
        
      </div>
    </div>

  );

}

export default Origins;