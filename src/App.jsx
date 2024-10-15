import { Component } from "react";

import Quote from "./components/Quote.jsx";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Quote />;
  }
}

export { App };
