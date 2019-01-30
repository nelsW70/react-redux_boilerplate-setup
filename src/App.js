import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h5>Open the pod bay doors {this.props.username}.</h5>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/HAL9000_Case.svg/220px-HAL9000_Case.svg.png"
            alt="hal 9000"
          />
          <h5>
            It's {this.props.current} in {this.props.location}.
          </h5>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.user.username,
  current: state.user.current,
  location: state.user.location
});

export default connect(mapStateToProps)(App);
