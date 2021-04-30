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

    var { isLoaded } = this.state;
    
    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    else {

      return (
        <div className="App">
          Successful
          <button onClick={sortByAge}>Filter by Age</button>
          <ResultList data={this.state.randomUsers} />
        </div>
      )
    }
  }
}

export default App;

// import SearchResultContainer from "./components/SearchResultContainer";

// function App() {
//   return <SearchResultContainer />;
// }

// export default App;
