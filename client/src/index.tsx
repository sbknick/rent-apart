import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader";
import "./index.scss";
import App from "./ui/App";

declare var module: any;

let MyApp = hot(module)(App);

ReactDOM.render(<MyApp />, document.getElementById('root'));