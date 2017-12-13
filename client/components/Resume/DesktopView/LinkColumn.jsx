import React from 'react';

import ResumeLink from './ResumeLink.jsx';


class LinkColumn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { changeSlides } = this.props;

    return (

      <div style={{
        height: '450px',
        width: '200px',
        padding: '25px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'
      }}>
        <ResumeLink 
          name={'Skills'}
          onClick={() => { changeSlides('skills') }}
        />
        <ResumeLink 
          name={'Experience'}
          onClick={() => { changeSlides('experience') }}
        />
        <ResumeLink 
          name={'Education'}
          onClick={() => { changeSlides('education') }}
        />
        <ResumeLink 
          name={'Links'}
          onClick={() => { changeSlides('links') }}
        />
      </div>

    );

  }
}

export default LinkColumn;