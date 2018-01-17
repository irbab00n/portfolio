import React from 'react';
import apply from 'applystyles';

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

    return (

      <div style={
        apply(
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
              onClick={() => {}}
            />
          </a>

          <a href={'https://www.linkedin.com/in/cosbyts/'} target='_blank'>
            <Button 
              label={'https://s3-us-west-1.amazonaws.com/cos-bytes.com/linkedin_logo.png'}
              labelType={'image'}
              hoverColor={{backgroundColor: 'rgba(0, 122, 193, 1.0)'}}
              onClick={() => {}}
            />
          </a>

        </div>

        <div style={style.resumeLinkBody}>

          <div style={style.resumeDescription}>
            <center>If you would like to view or download my resume, click below!</center>
          </div>

          <a style={style.textLabelFormat} href={'https://s3-us-west-1.amazonaws.com/cos-bytes.com/resume.pdf'} target='_blank'>
            <Button 
              label={'View / Download'}
              hoverColor={{backgroundColor: 'rgba(0, 122, 193, 1.0)'}}
              onClick={() => {}}
            />
          </a>

        </div>

      </div>

    ); 

  }
}

export default LinksSlide;








