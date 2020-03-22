import React from "react";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { editSchedule } from "../redux/actions";

const ScheduleControl = ({ schedule, editSchedule }) => {
    const handleUpdateState = () => {
        editSchedule(schedule.id, {
            ...schedule,
            isCompleted: !schedule.isCompleted
        });
    };

    const handleUpdateBookmark = () => {
        editSchedule(schedule.id, {
            ...schedule,
            isBookMark: !schedule.isBookMark
        });
    };

    return (
        <>
            <div className="control">
                <Link to={"/schedules/" + schedule.id}>
                    <Icon name="edit outline" />
                </Link>
                <Icon
                    name="check"
                    color={schedule.isCompleted ? "green" : "grey"}
                    onClick={handleUpdateState}
                />
                <Icon
                    name="star outline"
                    color={schedule.isBookMark ? "yellow" : "grey"}
                    onClick={handleUpdateBookmark}
                />
            </div>
        </>
    );
};

const mapDispatchToProp = dispatch => ({
    editSchedule: (id, schedule) => dispatch(editSchedule(id, schedule))
});

export default connect(null, mapDispatchToProp)(ScheduleControl);
