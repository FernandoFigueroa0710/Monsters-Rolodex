import React, { Component } from "react";
import { getNames } from "./components/monster_actions";
import { connect } from "react-redux";
//components
import CardList from "./components/card-list/cardList.component";

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
        <CardList monsters={this.state.monsters} />
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
