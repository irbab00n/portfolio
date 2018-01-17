import React from 'react';

import style from './style';


class InfoBlocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { currentProject, loaded } = this.props;

    return (

      <div style={style.infoBlocksBody}>

        <div style={style.titleBlockBody}>

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
                  return <li style={{fontSize: '12px'}}>{contributor}</li>
                })
              }
            </ul>
          </div>
        </div>

        <div style={style.aboutBlockBody}>
          Bottom-Right
        </div>

      </div>

    );

  }
}

export default InfoBlocks;