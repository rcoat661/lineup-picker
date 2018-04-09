import React from 'react';

class RosterMid extends React.Component {

  constructor() {
    super();
    this.renderButton = this.renderButton.bind(this)
  }

  renderButton(key){
    const { mid, removeFromOrder, index, addToOrder, formation } = this.props;
    let midLength = Object.keys(mid).length;
    const midNum = formation['mid'] ? formation['mid'] : 4;
    if(!mid[index] && midLength < midNum) {
      return (
        <button onClick={(e) => addToOrder(index)}>Add Midfielder</button>
      )
    } else if(mid[index]) {
        return(
          <button className="active" onClick={(e) => removeFromOrder(key)}>Remove Midfielder</button>
        )
      } else {
        return (
          <p className="error">Already have {midNum} Midfielders.</p>
        )
      }
    }

  render() {
      const { details, index } = this.props;
      if(details.position === 'MID') {
      return (
        <li key={index} className="schedule-item">
          <h3>{details.name}</h3><span className="number">{details.number}</span>
          <span className="position">{details.position}</span>
          {this.renderButton(index)}
        </li>
      )
    } else {
      return false
    }
  }
}

export default RosterMid;