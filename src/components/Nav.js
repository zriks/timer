import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

export default function Nav() {
    return (
        <nav className="nav">
            <Link to="/">
                <Icon name="home" size="large" />
            </Link>
            <Link to="/add">
                <Icon name="calendar plus outline" size="large" />
            </Link>
            <Link to="/schedules">
                <Icon name="calendar alternate outline" size="large" />
            </Link>
        </nav>
    );
}
