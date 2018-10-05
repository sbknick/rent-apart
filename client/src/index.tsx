import * as React from "react";
import { Component } from "react";
import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader";
import "./index.scss";
import App from "./ui/App";

declare var module;

let MyApp = hot(module)(App);

ReactDOM.render(<App />, document.getElementById('root'));