import React from 'react';

class LineupItem extends React.Component {

  constructor() {
    super();
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleSwitch(e) {
    const { switchDefPlayer, switchMidPlayer, switchFwdPlayer, index, switchDefList, switchMidList, switchFwdList, lineup } = this.props;
    let switchDefListLen = switchDefList ? Object.keys(switchDefList).length : 0;
    let switchMidListLen = switchMidList ? Object.keys(switchMidList).length : 0;
    let switchFwdListLen = switchFwdList ? Object.keys(switchFwdList).length : 0;
    if(switchDefListLen === 0) {
      if(lineup[index].position === 'DEF') {
        e.currentTarget.parentElement.parentElement.classList.add('active-container')
        e.currentTarget.parentElement.classList.add('active')
        switchDefPlayer(index, e);
      }
    } else if(switchDefListLen > 0) {
      switchDefPlayer(index, e);
    }

    if(switchMidListLen === 0) {
      if(lineup[index].position === 'MID') {
        e.currentTarget.parentElement.parentElement.classList.add('active-container')
        e.currentTarget.parentElement.classList.add('active')
        switchMidPlayer(index, e);
      }
    } else if(switchMidListLen > 0) {
      switchMidPlayer(index, e);
    }

    if(switchFwdListLen === 0) {
      if(lineup[index].position === 'FWD') {
        e.currentTarget.parentElement.parentElement.classList.add('active-container')
        e.currentTarget.parentElement.classList.add('active')
        switchFwdPlayer(index, e);
      }
    } else if(switchFwdListLen > 0) {
      switchMidPlayer(index, e);
    }
  }

  render() {
    const { details, removeFromOrder, index } = this.props;
      return (
        <div className="player" id={index}>
          <div className="exit" onClick={(e) => removeFromOrder(index)}>X</div>
          <div className="inner-content">
            <span>{details.name}</span>
            <span className="number">{details.number}</span>
          </div>
          <span className="switch" onClick={(e) => this.handleSwitch(e)}></span>
        </div>
      )
    }
}

export default LineupItem;