import React from "react";
import ReactDOM from "react-dom";

import "./assets/css/flexbox.css";
import "./index.css";
import "aos/dist/aos.css";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
