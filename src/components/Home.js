import React from "react";
import { Divider, Grid, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home-schedule">
            <h1>MANAGE SCHEDULE</h1>
            <Divider />
            <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Button basic color="blue">
                            <Link to="/schedules">
                                <div className="filter-item">
                                    total
                                    <Icon name="globe" color="blue" />
                                </div>
                                <p>32</p>
                            </Link>
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button basic color="yellow">
                            <Link to="/schedules?isBookMark=true">
                                <div className="filter-item">
                                    bookmark
                                    <Icon name="star outline" color="yellow" />
                                </div>
                                <p>32</p>
                            </Link>
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button basic color="green">
                            <Link to="/schedules?isCompleted=true">
                                <div className="filter-item">
                                    completed
                                    <Icon name="check" color="green" />
                                </div>
                                <p>32</p>
                            </Link>
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Divider />
        </div>
    );
}
