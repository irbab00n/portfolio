import React from 'react';

import Button from './Button.jsx';

import style from './style';

class LinksSlide extends React.Component {
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
    const { applyStyles } = this.props;

    return (

      <div style={
        applyStyles(
          style.body,
          loaded && style.body_loaded
        )
      }>

        <div style={style.externalLinksBody}>

          <a href={'https://github.com/irbab00n'} target='_blank'>
            <Button 
              label={'https://s3-us-west-1.amazonaws.com/cos-bytes.com/github_logo.png'}
              labelType={'image'}
              hoverColor={{backgroundColor: 'rgb(64, 64, 64)'}}
              onClick={() => { console.log('Github button click'); }}
              applyStyles={applyStyles}
            />
          </a>

          <a href={'https://www.linkedin.com/in/cosbyts/'} target='_blank'>
            <Button 
              label={'https://s3-us-west-1.amazonaws.com/cos-bytes.com/linkedin_logo.png'}
              labelType={'image'}
              hoverColor={{backgroundColor: 'rgba(0, 122, 193, 1.0)'}}
              onClick={() => { console.log('Linkedin button click'); }}
              applyStyles={applyStyles}
            />
          </a>

        </div>

        <div style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>

          <div style={{
            height: '100px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <center>If you would like to view or download my resume, click below!</center>
          </div>

          <a href={'https://s3-us-west-1.amazonaws.com/cos-bytes.com/resume.pdf'} target='_blank'>
            <Button 
              label={'Resume'}
              hoverColor={{backgroundColor: 'rgba(0, 122, 193, 1.0)'}}
              onClick={() => { console.log('Resume button click'); }}
              applyStyles={applyStyles}
            />
          </a>

        </div>

      </div>

    ); 

  }
}

export default LinksSlide;








