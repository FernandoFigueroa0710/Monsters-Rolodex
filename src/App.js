import React, { Component } from "react";
import { getNames } from "./components/monster_actions";
import { connect } from "react-redux";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }
  componentDidMount() {
    this.props
      .dispatch(getNames())
      .then(response => this.setState({ monsters: response.payload }));
  }
  render() {
    return (
      <div className="landing_page-main">
        <h1>Monsters Rolodex</h1>
        <div>
          {this.state.monsters.map((monster, index) => (
            <div key={monster.id}>{monster.name}</div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    monstersData: state.monstersData
  };
};
export default connect(mapStateToProps)(App);
