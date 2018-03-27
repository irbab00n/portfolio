import React from 'react';

const LeftColumn = (props) => {

  return (

    <div style={{
      width: '50%',
      maxWidth: '700px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>

      <div style={{
        marginBottom: '50px',
        alignSelf: 'flex-start',
        height: '50px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        fontSize: '44px'
      }}>
        <span style={{margin: '20px 0 0 20px'}}>The Inspirational Hobby</span>
      </div>

      <div style={{
        width: '92%',
        display: 'flex',
        alignItems: 'center',
        fontSize: '16px'
      }}>
        I designed foliage assets, rocks, and texture maps for game environments.  As somoene who grew up loving video games, I began to wonder how they were made.  It was a slippery slope, because the more I researched what goes into making games, the more I wanted to make games.<br/>
        <br/>
        After making several rocks, some grass, a bush or two and even a tree, I began to wonder what else there was to learn about game development.  I realized pretty quickly that I barely scratched the surface.  While game art is visually appealing, it is the software behind it that makes everything come to life.  A few tutorials later and I had a working version of Asteroid that I made myself.<br/>
        <br/>
        In January of 2017 I started learning how to program in JavaScript.  I went from writing simple funcitons to being able to build and deploy full-stack applications.  This portfolio is a great example, as I have built everything you see completely from scratch using React and Node.  Programming has taken me to some incredible places, and allowed me to meet some incredible people along the way.
      </div>

    </div>

  );

};

export default LeftColumn;