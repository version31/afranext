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
import Landing1 from "./scenes/landing/Landing1";
import Landing2 from "./scenes/landing/Landing2";

import Welcome from "./scenes/pages/Welcome";
import Design from "./scenes/pages/Design";
import Web from "./scenes/pages/Web";

const Root = () => {
    return (
        <BrowserRouter basename={"/"}>
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/landing1`} component={Landing1} />
                <Route exact path={`${process.env.PUBLIC_URL}/landing2`} component={Landing2} />

                <Route exact path={`${process.env.PUBLIC_URL}/sample`} component={Sample} />
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Welcome} />
                <Route exact path={`${process.env.PUBLIC_URL}/design`} component={Design} />
                <Route exact path={`${process.env.PUBLIC_URL}/web-development`} component={Web} />

            </Switch>
        </BrowserRouter>
    );
};

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();
