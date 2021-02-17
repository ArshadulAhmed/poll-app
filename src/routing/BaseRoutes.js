import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../screens/NotFound";
import HomePage from "../screens/HomePage";

const BaseRouter = () => (
    <React.Fragment>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFound} />
        </Switch>
    </React.Fragment>
);
export default BaseRouter;
