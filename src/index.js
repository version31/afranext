import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// Stylesheet
import "./index.scss";

// Scenes

const Root = () => {
    return <></>;
};

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();
