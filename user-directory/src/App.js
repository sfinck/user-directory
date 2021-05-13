import React, { Component } from "react";
import ResultList from "./components/ResultList";

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
    function sortByAge() {
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
          <button onClick={sortByAge}>Sort by Age</button>
          <button onClick={filterByName}>Filter by Name</button>
          <ResultList data={this.state.randomUsers} />
        </div>
      )
    }
  }
}

export default App;
