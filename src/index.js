import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Stylesheet
import "./index.scss";

// Scenes
import Sample from "./scenes/sample/Sample";
import Home from "./scenes/home/Home";

const Root = () => {
    return (
        <BrowserRouter basename={"/"}>
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Sample} />
                <Route exact path={`${process.env.PUBLIC_URL}/home`} component={Home} />
            </Switch>
        </BrowserRouter>
    );
};

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();
