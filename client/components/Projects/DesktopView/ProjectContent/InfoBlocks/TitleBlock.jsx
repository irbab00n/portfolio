import React from 'react';
import apply from 'applystyles';

import style from './style';


class TitleBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  render() {

    const { hovered } = this.state;
    const { currentProject } = this.props;

    return (

      <div 
        style={
            apply(
              style.titleBlockBody,
              hovered && style.titleBlockBody_hovered
            )
          }
        onMouseEnter={() => this.setState({hovered: true})}
        onMouseLeave={() => this.setState({hovered: false})}
      >

        <div style={style.title}>
          <span style={style.titleHeader}>Project Title:</span>
          <span style={style.titleText}>{`${currentProject.title}`}</span>
        </div>

        <div style={style.description}>
          <span style={style.descriptionHeader}>Project Description:</span>
          <p style={style.descriptionText}>{`${currentProject.description}`}</p>
        </div>

        <div style={style.contributors}>
          <span style={style.contributorsHeader}>Project Contributors:</span>
          <ul style={{margin: 0}}>
            {
              currentProject.contributors.map((contributor, index) => {
                return <li key={`contrib-${index}`} style={{fontSize: '12px'}}>{contributor}</li>
              })
            }
          </ul>
        </div>
      </div>

    );

  };
}

export default TitleBlock;