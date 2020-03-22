import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getSchedule, editSchedule } from "../redux/actions";
import FormSchedule from "./FormSchedule";

const EditSchedule = ({ match, schedule, getSchedule, editSchedule }) => {
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);

    useEffect(() => {
        getSchedule(match.params.id);
    }, [getSchedule, match.params.id]);

    const onSubmit = output => {
        editSchedule(match.params.id, output);
        setRedirectToReferrer(true);
    };

    if (redirectToReferrer) {
        return <Redirect to="/schedules" />;
    }

    return (
        <div className="form-schedule">
            <h1>Edit Schedule </h1>
            <FormSchedule schedule={schedule} onSubmit={onSubmit} />
        </div>
    );
};

const mapStateToProp = ({ schedule }) => {
    return {
        schedule: schedule.selectSchedule
    };
};

const mapDispatchToProp = dispatch => ({
    getSchedule: id => dispatch(getSchedule(id)),
    editSchedule: (id, schedule) => dispatch(editSchedule(id, schedule))
});

export default connect(mapStateToProp, mapDispatchToProp)(EditSchedule);
