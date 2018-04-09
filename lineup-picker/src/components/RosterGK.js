import React from 'react';

class RosterGK extends React.Component {

  constructor() {
    super();
    this.renderButton = this.renderButton.bind(this)
  }

  renderButton(key){
    const { gk, removeFromOrder, index, addToOrder } = this.props;
    const gkLength = Object.keys(gk).length;
    if(!gk[index] && gkLength < 1) {
      return (
        <button onClick={(e) => addToOrder(index)}>Add GoalKeeper</button>
      )
    } else if(gk[index]) {
        return(
          <button className="active" onClick={(e) => removeFromOrder(key)}>Remove Goalkeeper</button>
        )
      } else {
        return (
          <p className="error">Already have a GoalKeeper.</p>
        )
      }
  }

  render() {
      const { details, index } = this.props;
      if(details.position === 'GK') {
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

export default RosterGK;