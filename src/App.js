import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import AddSchedule from "./components/AddSchedule";
import ListSchedule from "./components/ListSchedule";
import EditSchedule from "./components/EditSchedule";
import { Container } from "semantic-ui-react";

function App() {
    return (
        <div className="app">
            <Container>
                <Router>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/add" component={AddSchedule} />
                        <Route exact path="/schedules" component={ListSchedule} />
                        <Route path="/schedules/:id" component={EditSchedule} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </Container>
        </div>
    );
}

export default App;
