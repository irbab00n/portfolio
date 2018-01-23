import React from 'react';

import HeaderLeft from './HeaderLeft.jsx';
import HeaderRight from './HeaderRight.jsx';
import Description from './Description.jsx';

import style from './style';

class Institution extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { reverse, college } = this.props; 

    return (

      <div style={style.institutionBody}>

        {
          reverse
            ? <HeaderRight 
                image={college.image}
                title={college.title}
                location={college.location}
                studied={college.studied}
              />
            : <HeaderLeft 
                image={college.image}
                title={college.title}
                location={college.location}
                studied={college.studied}
              />
        }

        <Description 
          text={college.text}
          range={college.range}
        />

      </div>

    );

  }
}

export default Institution;