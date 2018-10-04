import * as React from "react";
import { Component } from "react";
import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader";
import "./index.scss";

declare var module;

class App extends Component 
{
  render()
  {
    return (<h1>Hello World!</h1>);
  }
}

let MyApp = hot(module)(App);

ReactDOM.render(<App />, document.getElementById('root'));