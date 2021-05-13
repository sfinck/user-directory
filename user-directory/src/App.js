import React, { Component } from "react";
import ResultList from "./components/ResultList";
import './css/App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomUsers: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=100&nat=us')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          randomUsers: json.results,
        })
      })
  }

  render() {
    function sortByName() {
      // sort the this.state.randomUser's age by asc

    }

    function filterByName() {
      // filter the this.state.randomUser's name by key word 
    }

    var { isLoaded } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    else {

      return (
        <div className="App">
          <h1>Employee Directory</h1>
          <button onClick={sortByName}>Sort by Name</button>
          <button onClick={filterByName}>Filter by Name</button>
          <div className="card scroll">
            <ResultList data={this.state.randomUsers} />
          </div>
        </div>
      )
    }
  }
}

export default App;
