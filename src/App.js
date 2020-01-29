import React, { Component } from "react";
import { getNames } from "./components/monster_actions";
import { connect } from "react-redux";
//components
import CardList from "./components/card-list/cardList.component";
import SearchBox from "./components/searchbox/searchBox.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  componentDidMount() {
    this.props
      .dispatch(getNames())
      .then(response => this.setState({ monsters: response.payload }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="landing_page-main">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search your monster"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
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
