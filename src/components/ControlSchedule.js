import React from "react";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function ScheduleControl({ id, isCompleted, isBookMark }) {
    return (
        <>
            <div className="control">
                <Link to={"/schedule/" + id}>
                    <Icon name="edit outline" />
                </Link>
                <Icon name="check" color={isCompleted ? "green" : ""} />
                <Icon name="star outline" color={isBookMark ? "yellow" : ""}  />
            </div>
        </>
    );
}
