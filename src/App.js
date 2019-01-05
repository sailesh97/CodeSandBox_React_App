import React, { Component } from "react";
import { Provider } from "./Context";
import classes from "./App.module.css";
import Layout from "./components/Layout/Layout";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className={classes.App}>
          <Layout />
        </div>
      </Provider>
    );
  }
}

export default App;
