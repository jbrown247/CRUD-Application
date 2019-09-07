import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import * as Sentry from '@sentry/browser';
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

Sentry.init({ dsn: "https://d959904c674a4f6a8bad3244e4a7d5af@sentry.io/1553488" });

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();



