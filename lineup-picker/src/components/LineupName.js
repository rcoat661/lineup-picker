import React from 'react';


class LineupName extends React.Component {
  goToStore(event) {
    event.preventDefault();
    // get input value
    const lineupId = this.lineupInput.value;
    console.log(this.lineupInput.value);
    this.context.router.transitionTo(`/lineup/${lineupId}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter Name</h2>
        <input type="text" required placeholder="Team Name" ref={(input) => {this.lineupInput = input}} />
        <button type="submit">Create Lineup</button>
      </form>
    );
  }
}

LineupName.contextTypes = {
  router: React.PropTypes.object
}

export default LineupName;