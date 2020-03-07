import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/seach-box.component";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(data => data.json())
      .then(users => this.setState({ monsters: users }));
  }
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonster = monsters.filter(monsters =>
      monsters.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <br />
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        ></SearchBox>

        <CardList monsters={filteredMonster}></CardList>
      </div>
    );
  }
}

// function App() {
//   return (

//   );
// }

export default App;
