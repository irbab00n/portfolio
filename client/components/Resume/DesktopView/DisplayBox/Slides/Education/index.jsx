import React from 'react';

import Institution from './Institution.jsx';

import colleges from './colleges';

import style from './style';

class EducationSlide extends React.Component {
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

        <Institution
          college={colleges.hackReactor}
        />

        <Institution
          college={colleges.americanRiver}
          reverse={true}
        />

      </div>
    ); 

  }
}

export default EducationSlide;