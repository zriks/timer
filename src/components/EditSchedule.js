import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getSchedule } from "../redux/actions";
import FormSchedule from "./FormSchedule";

const EditSchedule = ({ match, schedule, getSchedule }) => {
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);

    useEffect(() => {
        getSchedule(match.params.id);
    }, [getSchedule, match.params.id]);

    const onSubmit = output => {
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
    getSchedule: id => dispatch(getSchedule(id))
});

export default connect(mapStateToProp, mapDispatchToProp)(EditSchedule);
