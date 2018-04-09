import React from 'react';

class Save extends React.Component {

  constructor() {
    super();
    this.clickSave = this.clickSave.bind(this);
  }

  clickSave(e) {
    e.preventDefault()
    document.querySelector('body').classList.add('save-lineup');
      window.print()
    setTimeout(function(){
      document.querySelector('body').classList.remove('save-lineup');
    },200);
  }


  renderSaveButton() {
    const { lineup } = this.props;
    let fullteam = 11;
    let lineupIds = Object.keys(lineup);
    let lineupLength = lineupIds.length;
    let remaining = fullteam - lineupLength;
    let playerText = remaining > 1 ? 'players' : 'player';
    if(lineupLength !== 0) {
      if(lineupLength === fullteam) {
        return(
          <button onClick={(e) => this.clickSave(e)}>Save Lineup</button>
        )
      } else {
        return (
          <p className="error">Still have: {remaining} {playerText}</p>
        )
      }
    } else {
      return (
        <p className="error">Start filling out players!</p>
      )
    }
  }
  render() {
    return (
      <div className="save">
        {this.renderSaveButton()}
      </div>
    )
  }
}

export default Save;