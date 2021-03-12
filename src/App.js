import "./App.css";
import React, { Component } from "react";
import { CardList } from "./Components/card-list/card-list.component";
import { SearchBox } from "./Components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    //Create state
    this.state = {
      monsters: [],
      //Searchfield is made to store what we get from input searchfield
      searchField: "",
    };
  }
  //When a component renders (On Mount)
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => this.setState({ monsters: users }))
    );
  }
  //USe calllback (arrow) function to, you dont have to use bind
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    //We do the same thing with 1 line of code as shown below
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    return (
      <div className="App">
        <h1 className="titleMain">Monsters Rolodex</h1>
        {/* <input
          type="search"
          placeholder="Search Monsters"
          //We will get the VALUE from searchfield.
          // (e) is just a random variable we use in this case to get the value from searchfield
          onChange={(e) => this.setState({ searchField: e.target.value })}
        ></input> */}
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        ></SearchBox>
        {/* Input state to CardList here which will take it as prop */}
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
