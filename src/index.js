import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Stylesheet
// import "./index.scss";

// Scenes
import Sample from "./scenes/sample/Sample";
import Landing1 from "./scenes/landing/Landing1";
import Landing2 from "./scenes/landing/Landing2";

import Welcome from "./scenes/pages/Welcome";
import About from "./scenes/pages/About";
import BlogSingle from "./scenes/pages/BlogSingle";
import BlogIndexList from "./scenes/pages/BlogIndexList";
import BlogIndexGrid from "./scenes/pages/BlogIndexGrid";
import BlogIndexGrid2 from "./scenes/pages/BlogIndexGrid2";
import Contact from "./scenes/pages/Contact";
import Login from "./scenes/pages/Login";
import Service from "./scenes/pages/Service";
import Design from "./scenes/pages/Design";
import ML from "./scenes/pages/ML";
import Web from "./scenes/pages/Web";
import MobileDevelopment from "./scenes/pages/MobileDevelopment";

const Root = () => {
    return (
        <BrowserRouter basename={"/"}>
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/landing1`} component={Landing1}/>
                <Route exact path={`${process.env.PUBLIC_URL}/landing2`} component={Landing2}/>

                <Route exact path={`${process.env.PUBLIC_URL}/sample`} component={Sample}/>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Welcome}/>
                <Route exact path={`${process.env.PUBLIC_URL}/about-us`} component={About}/>
                <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About}/>
                <Route exact path={`${process.env.PUBLIC_URL}/posts/1`} component={BlogSingle}/>
                <Route exact path={`${process.env.PUBLIC_URL}/posts/1`} component={BlogSingle}/>
                <Route exact path={`${process.env.PUBLIC_URL}/posts/list`} component={BlogIndexList}/>
                <Route exact path={`${process.env.PUBLIC_URL}/posts/`} component={BlogIndexList}/>
                <Route exact path={`${process.env.PUBLIC_URL}/posts/grid`} component={BlogIndexGrid}/>
                <Route exact path={`${process.env.PUBLIC_URL}/posts/grid2`} component={BlogIndexGrid2}/>
                <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login}/>
                <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                <Route exact path={`${process.env.PUBLIC_URL}/service`} component={Service}/>
                <Route exact path={`${process.env.PUBLIC_URL}/design`} component={Design}/>
                <Route exact path={`${process.env.PUBLIC_URL}/machine-learning`} component={ML}/>
                <Route exact path={`${process.env.PUBLIC_URL}/web-development`} component={Web}/>
                <Route exact path={`${process.env.PUBLIC_URL}/mobile-development`} component={MobileDevelopment}/>

            </Switch>
        </BrowserRouter>
    );
};

ReactDOM.render(<Root/>, document.getElementById("root"));
serviceWorker.unregister();
