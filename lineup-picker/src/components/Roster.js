import React from 'react';

import RosterGK from './RosterGK';
import RosterDef from './RosterDef';
import RosterMid from './RosterMid';
import RosterFwd from './RosterFwd';

class Roster extends React.Component {
  render() {
    const { players, addToOrder, removeFromOrder, header, lineup, gk, def, mid, fwd, formation } = this.props;
    return (
      <div className="schedule header-top">
        <h1>{header}</h1>
        <ul>
          {
            Object
            .keys(players)
            .map(key =>
              <RosterGK
                tagline=""
                key={key}
                index={key}
                lineup={lineup}
                details={players[key]}
                addToOrder={addToOrder}
                removeFromOrder={removeFromOrder}
                gk={gk} />)
          }
          {
            Object
            .keys(players)
            .map(key =>
              <RosterDef
                tagline=""
                key={key}
                index={key}
                lineup={lineup}
                details={players[key]}
                addToOrder={addToOrder}
                removeFromOrder={removeFromOrder}
                def={def}
                formation={formation} />)
          }
          {
            Object
            .keys(players)
            .map(key =>
              <RosterMid
                tagline=""
                key={key}
                index={key}
                lineup={lineup}
                details={players[key]}
                addToOrder={addToOrder}
                removeFromOrder={removeFromOrder}
                mid={mid}
                formation={formation} />)
          }
          {
            Object
            .keys(players)
            .map(key =>
              <RosterFwd
                tagline=""
                key={key}
                index={key}
                lineup={lineup}
                details={players[key]}
                addToOrder={addToOrder}
                removeFromOrder={removeFromOrder}
                fwd={fwd}
                formation={formation} />)
          }
        </ul>
      </div>
    )
  }
}

export default Roster;