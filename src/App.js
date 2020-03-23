import React from "react";
import Nav from "./components/Nav";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Container } from "semantic-ui-react";

const App = Page => props => {
    return (
        <div className="app">
            <Container>
                <Nav />
                <ReactCSSTransitionGroup
                    transitionAppear={true}
                    transitionAppearTimeout={600}
                    transitionEnterTimeout={600}
                    transitionLeaveTimeout={200}
                    transitionName={"SlideIn"}
                >
                    <Page {...props} />
                </ReactCSSTransitionGroup>
            </Container>
        </div>
    );
};

export default App;
