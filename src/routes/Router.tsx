import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import About from "../components/pages/About";
import Courses from "../components/pages/Courses";
import Home from "../components/pages/Home";
import InterViews from "../components/pages/Interviews";

const Router: React.SFC = (): JSX.Element => {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path="/about" exact={true} component={About} />
                    <Route path="/courses" component={Courses} />
                    <Route path="/interviews" component={InterViews} />
                    <Route path="/" component={Home} />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    );
};

export default Router;
