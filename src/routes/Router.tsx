import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Footer from "../components/footer";
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
                    <Route to="/" component={Home} />
                    <Route to="/interviews" component={InterViews} />
                    <Route to="/about" component={About} />
                    <Route to="/courses" component={Courses} />
                </Switch>
                <Footer />
            </React.Fragment>
        </BrowserRouter>
    );
};

export default Router;
