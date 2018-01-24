import React from 'react';
import apply from 'applystyles';

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

    return (

      <div style={
        apply(
          style.slideBody,
          loaded && style.slideBody_loaded,
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