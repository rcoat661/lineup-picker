import React from 'react';

class RosterFwd extends React.Component {

  constructor() {
    super();
    this.renderButton = this.renderButton.bind(this)
  }

  renderButton(key){
    const { fwd, removeFromOrder, index, addToOrder, formation } = this.props;
    const fwdLength = Object.keys(fwd).length;
    const fwdNum = formation['fwd'] ? formation['fwd'] : 1;
    if(!fwd[index] && fwdLength < fwdNum) {
      return (
        <button onClick={(e) => addToOrder(index)}>Add Forward</button>
      )
    } else if(fwd[index]) {
        return(
          <button className="active" onClick={(e) => removeFromOrder(key)}>Remove Forward</button>
        )
      } else {
        return (
          <p className="error">Already have {fwdNum} Forward.</p>
        )
      }
    }

  render() {
      const { details, index } = this.props;
      if(details.position === 'FWD') {
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

export default RosterFwd;