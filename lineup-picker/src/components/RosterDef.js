import React from 'react';

class RosterDef extends React.Component {

  constructor() {
    super();
    this.renderButton = this.renderButton.bind(this)
  }

  renderButton(key){
    const { def, removeFromOrder, index, addToOrder, formation } = this.props;
    const defLength = Object.keys(def).length;
    const defNum = formation['def'] ? formation['def'] : 4;
    if(!def[index] && defLength < defNum) {
      return (
        <button onClick={(e) => addToOrder(index)}>Add Defender</button>
      )
    } else if(def[index]) {
        return(
          <button className="active" onClick={(e) => removeFromOrder(key)}>Remove Defender</button>
        )
      } else {
        return (
          <p className="error">Already have {defNum} Defenders.</p>
        )
      }
    }

  render() {
      const { details, index } = this.props;
      if(details.position === 'DEF') {
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

export default RosterDef;