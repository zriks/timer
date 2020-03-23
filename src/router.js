import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import NotFound from "./components/NotFound";
import AddSchedule from "./components/AddSchedule";
import ListSchedule from "./components/ListSchedule";
import EditSchedule from "./components/EditSchedule"; 
import App from "./App";

export default function router() {
    return (
            <Router>
                <Switch>
                    <Route exact path="/" component={App(Home)} />
                    <Route path="/add" component={App(AddSchedule)} />
                    <Route
                        exact
                        path="/schedules"
                        component={App(ListSchedule)}
                    />
                    <Route
                        path="/schedules/:id"
                        component={App(EditSchedule)}
                    />
                    <Route component={NotFound} />
                </Switch>
            </Router> 
    );
}
