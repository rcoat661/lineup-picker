import React from 'react';
import LineupItem from './LineupItem';

class Lineup extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.updateFormation("442");
  }


  handleClass() {
    const { formation } = this.props;
    if(formation) {
      return 'lineup ' + formation['updated-formation']
    } else {
      return 'lineup'
    }
  }

  handleChange(e) {
    this.props.updateFormation(e.target.value);
  }

  render() {
    const { gk, def, mid, fwd, header, removeFromOrder, switchDefPlayer, switchMidPlayer, switchFwdPlayer, switchDefList, switchMidList, switchFwdList, removeSwitch, lineup } = this.props;
    return (
      <div className={this.handleClass()}>
        <h2 className="h1">{header}</h2>
        <div className="select-wrapper">
          <select name="" onChange={(e) => this.handleChange(e)}>
            <option value="442">4-4-2</option>
            <option value="4231">4-2-3-1</option>
            <option value="352">3-5-2</option>
            <option value="433">4-3-3</option>
          </select>
        </div>
        <div className="lineup-container">
          <div className="position-container">
            {
              Object
              .keys(gk)
              .map(key => <LineupItem key={key} index={key} details={gk[key]} removeFromOrder={removeFromOrder} />)
            }
          </div>
          <div className="position-container">
            {
              Object
              .keys(def)
              .map(key => <LineupItem lineup={lineup} key={key} index={key} details={def[key]} removeFromOrder={removeFromOrder} switchDefPlayer={switchDefPlayer} removeSwitch={removeSwitch} switchDefList={switchDefList} />)
            }
          </div>
          <div className="position-container">
            {
              Object
              .keys(mid)
              .map(key => <LineupItem lineup={lineup} key={key} index={key} details={mid[key]} removeFromOrder={removeFromOrder} switchMidPlayer={switchMidPlayer} removeSwitch={removeSwitch} switchMidList={switchMidList} />)
            }
          </div>
          <div className="position-container">
            {
              Object
              .keys(fwd)
              .map(key => <LineupItem lineup={lineup} key={key} index={key} details={fwd[key]} removeFromOrder={removeFromOrder} switchFwdPlayer={switchFwdPlayer} removeSwitch={removeSwitch} switchFwdList={switchFwdList} />)
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Lineup;