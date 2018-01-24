import React from 'react';

import Header from './Header.jsx';
import Description from './Description.jsx';

import style from './style';

class Job extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { job } = this.props;

    return (

      <div style={style.slideLayout}>

        <Header 
          image={job.image}
          employmentRange={job.employmentRange}
          title={job.title}
        />

        <Description 
          duties={job.duties}
        />

      </div>

    );

  }
}

export default Job;