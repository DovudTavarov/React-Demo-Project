import React, { Component } from "react";
import { quotes } from "../assets/quotes";

export default class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      quotes: quotes,
    };
  }
  nextBtn = () => {
    const { index, quotes } = this.state;
    if (index < quotes.length - 1) {
      this.setState({ index: index + 1 });
    }
  };
  prevBtn = () => {
    const { index } = this.state;
    if (index > 0) {
      this.setState({ index: index - 1 });
    }
  };
  render() {
    const { quotes, index } = this.state;
    const currentQuote = quotes[index];
    return (
      <div className="App">
        <p>{currentQuote.text}</p>
        <p>- {currentQuote.author}</p>
        <div className="buttons">
          <button onClick={this.prevBtn}>Previous</button>
          <button onClick={this.nextBtn}>Next</button>
        </div>
      </div>
    );
  }
}
