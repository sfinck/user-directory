import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomUsers: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          randomUsers: json,
        })
      })
  }

  render() {

    var { isLoaded, randomUsers } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    else {

      return (
        <div className="App">
          <ul>
            {randomUsers.map(user => (
              <li key={user.res}>
               Name: {user.res.name}
              </li>
            ))}
          </ul>
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
