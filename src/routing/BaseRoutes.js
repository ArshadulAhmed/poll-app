import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../screens/NotFound";
import Login from "../screens/Login";
import HomePage from "../screens/HomePage";
import ResultPage from "../screens/ResultPage";

const BaseRouter = () => (
    <React.Fragment>
        <Switch>
            <Route exact path="/login/" component={Login} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/view-results/" component={ResultPage} />
            <Route component={NotFound} />
        </Switch>
    </React.Fragment>
);
export default BaseRouter;
