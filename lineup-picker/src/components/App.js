import React from 'react';

// import other components
import Roster from './Roster';
import Lineup from './Lineup';
import Save from './Save';
import spursLineup from '../sample-players';

class App extends React.Component {

  constructor() {
    super();
    this.addToOrder = this.addToOrder.bind(this);
    this.removeFromOrder = this.removeFromOrder.bind(this);
    this.updateFormation = this.updateFormation.bind(this);
    this.switchDefPlayer = this.switchDefPlayer.bind(this);
    this.switchMidPlayer = this.switchMidPlayer.bind(this);
    this.switchFwdPlayer = this.switchFwdPlayer.bind(this);
    this.removeSwitch = this.removeSwitch.bind(this);
    this.state = {
      formation: {},
      gk:{},
      def: {},
      defmid: {},
      mid: {},
      fwd: {},
      players: spursLineup,
      lineup: {},
      switchDefList: {},
      switchMidList: {},
      switchFwdList: {},
    }
  }

  updateFormation(value) {
    const formation = {...this.state.formation};
    const def = {...this.state.def};
    const mid = {...this.state.mid};
    const fwd = {...this.state.fwd};
    let defLength = Object.keys(def).length;
    let midLength = Object.keys(mid).length;
    let fwdLength = Object.keys(fwd).length;
    let defFormLength = value.substring(0,1);
    let midFormLength = value.length > 3 ? JSON.stringify(+value.substring(1,2) + +value.substring(2,3)) : value.substring(1,2);
    let fwdFormLength = value.length > 3 ? value.substring(3,4) : value.substring(2,3);

    // set number in position based on formation
    formation['def'] = defFormLength;
    formation['mid'] = midFormLength;
    formation['fwd'] = fwdFormLength;
    formation['updated-formation'] = `${defFormLength}-${midFormLength}-${fwdFormLength}`;

    // on select, remove extra def from other def array
    if(defFormLength > 0 && defFormLength < defLength) {
      let lastItem = Object.keys(def)[Object.keys(def).length - 1];
      delete def[lastItem]
      this.setState({def})
    }

    // on select, remove extra def from other def array
    if(midFormLength > 0 && midFormLength < midLength) {
      let lastItem = Object.keys(mid)[Object.keys(mid).length - 1];
      delete mid[lastItem]
      this.setState({mid})
    }

    // on select, remove extra def from other def array
    if(fwdFormLength > 0 && fwdFormLength < fwdLength) {
      let lastItem = Object.keys(fwd)[Object.keys(fwd).length - 1];
      delete fwd[lastItem]
      this.setState({fwd})
    }

    this.setState({formation})
  }

  removeFromOrder(key) {
    const lineup = {...this.state.lineup};
    const players = {...this.state.players};
    if(players[key].position === 'GK'){
      const gk = {...this.state.gk};
      delete gk[key]
      this.setState({gk});
    }
    if(players[key].position === 'DEF'){
      const def = {...this.state.def};
      delete def[key];
      this.setState({def});
    }
    if(players[key].position === 'MID'){
      const mid = {...this.state.mid};
      delete mid[key];
      this.setState({mid});
    }
    if(players[key].position === 'FWD'){
      const fwd = {...this.state.fwd};
      delete fwd[key];
      this.setState({fwd});
    }
    delete lineup[key];
    this.setState({lineup})
  }

  addToOrder(key) {
    const players = {...this.state.players};
    const lineup = {...this.state.lineup};

    if(players[key].position === 'GK'){
      const gk = {...this.state.gk};
      gk[key] = players[key];
      this.setState({gk});
    }
    if(players[key].position === 'DEF'){
      const def = {...this.state.def};
      def[key] = players[key];
      this.setState({def});
    }
    if(players[key].position === 'MID'){
      const mid = {...this.state.mid};
      mid[key] = players[key];
      this.setState({mid});
    }
    if(players[key].position === 'FWD'){
      const fwd = {...this.state.fwd};
      fwd[key] = players[key];
      this.setState({fwd});
    }
    lineup[key] = players[key];
    this.setState({lineup})
  }

  resetSwitchArray(object, val1, val2, e) {
    let containerElem = document.querySelector('.position-container.active-container');
    let elems = document.querySelector('.player.active');
    delete object[val1];
    delete object[val2];
    this.setState({object});
    containerElem.classList.remove('active-container');
    elems.classList.remove('active');
  }

  swapFwd(object, fwd, val1, val2) {
    let b = fwd[val1];
    fwd[val1] = fwd[val2];
    fwd[val2] = b;
    this.setState({fwd});
  }

  swapMid(object, mid, val1, val2) {
    let b = mid[val1];
    mid[val1] = mid[val2];
    mid[val2] = b;
    this.setState({mid});
  }

  swapDef(object, def, val1, val2) {
    let b = def[val1];
    def[val1] = def[val2];
    def[val2] = b;
    this.setState({def});
  }

  removeSwitch(object, key, e) {
    delete object[key];
    this.setState({object})
  }

  switchDefPlayer(key,e) {
    const switchDefList = {...this.state.switchDefList};
    const players = {...this.state.players};
    const def = {...this.state.def};
    if(switchDefList[key] === undefined) {
      switchDefList[key] = def[key];
      this.setState({switchDefList})
    } else {
      this.removeSwitch(switchDefList, key, e)
    }
    if(switchDefList) {
      if(Object.keys(switchDefList).length === 2) {
        let val1 = Object.keys(switchDefList)[0];
        let val2 = Object.keys(switchDefList)[1];
        this.swapDef(switchDefList, def, val1, val2)
        this.resetSwitchArray(switchDefList, val1, val2, e)
      }
    }
  }

  switchMidPlayer(key,e) {
    const switchMidList = {...this.state.switchMidList};
    const players = {...this.state.players};
    const mid = {...this.state.mid};
    if(switchMidList[key] === undefined) {
      switchMidList[key] = mid[key];
      this.setState({switchMidList})
    } else {
      this.removeSwitch(switchMidList, key, e)
    }
    if(switchMidList) {
      if(Object.keys(switchMidList).length === 2) {
        let val1 = Object.keys(switchMidList)[0];
        let val2 = Object.keys(switchMidList)[1];
        this.swapMid(switchMidList, mid, val1, val2)
        this.resetSwitchArray(switchMidList, val1, val2, e)
      }
    }
  }

  switchFwdPlayer(key,e) {
    const switchFwdList = {...this.state.switchFwdList}
    const players = {...this.state.players};
    const fwd = {...this.state.fwd};
    if(switchFwdList[key] === undefined) {
      switchFwdList[key] = fwd[key];
      this.setState({switchFwdList})
    } else {
      this.removeSwitch(switchFwdList, key, e)
    }
    if(switchFwdList) {
      if(Object.keys(switchFwdList).length === 2) {
        let val1 = Object.keys(switchFwdList)[0];
        let val2 = Object.keys(switchFwdList)[1];
        this.swapFwd(switchFwdList, fwd, val1, val2)
        this.resetSwitchArray(switchFwdList, val1, val2, e)
      }
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Roster header="Tottenhams Hotspurs Roster"
          players={this.state.players}
          addToOrder={this.addToOrder}
          removeFromOrder={this.removeFromOrder}
          gk={this.state.gk}
          def={this.state.def}
          mid={this.state.mid}
          fwd={this.state.fwd}
          lineup={this.state.lineup}
          formation={this.state.formation} />
        <Lineup header="Your Lineup"
          players={this.state.players}
          removeFromOrder={this.removeFromOrder}
          gk={this.state.gk}
          def={this.state.def}
          mid={this.state.mid}
          fwd={this.state.fwd}
          lineup={this.state.lineup}
          formation={this.state.formation}
          updateFormation={this.updateFormation}
          switchDefList={this.state.switchDefList}
          switchMidList={this.state.switchMidList}
          switchFwdList={this.state.switchFwdList}
          switchDefPlayer={this.switchDefPlayer}
          switchMidPlayer={this.switchMidPlayer}
          switchFwdPlayer={this.switchFwdPlayer}
          removeSwitch={this.removeSwitch} />
        <Save lineup={this.state.lineup}/>
      </div>
    )
  }
}

export default App;