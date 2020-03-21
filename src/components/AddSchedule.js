import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { addSchedule } from "../redux/actions";
import FormSchedule from "./FormSchedule";

function AddSchedule({ addSchedule }) {
    
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);

    const onSubmit = (schedule) => {
        addSchedule(schedule);
        setRedirectToReferrer(true);
    };

    if (redirectToReferrer) {
        return <Redirect to="/schedules" />;
    }

    return (
        <div className="form-schedule">
            <h1>ADD SCHEDULE</h1>
            <FormSchedule
                schedule={null}
                onSubmit={onSubmit}
            />
        </div>
    );
}

const mapDispatchToProp = dispatch => ({
    addSchedule: value => dispatch(addSchedule(value))
});

export default connect(null, mapDispatchToProp)(AddSchedule);
