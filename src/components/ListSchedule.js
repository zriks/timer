import React, { useEffect } from "react";
import { connect } from "react-redux";
import { isArray } from "lodash";
import { getSchedules } from "../redux/actions";
import Schedule from "./Schedule";

const ListSchedule = ({ listSchedule, getSchedules }) => {
    useEffect(() => {
        getSchedules();
    }, [getSchedules]);

    return (
        <div className="list-schedule">
            <h1>LIST SCHEDULE</h1>
            <ul className="list-content">
                {isArray(listSchedule) &&
                    listSchedule.map((schedule, index) => (
                        <Schedule key={index} schedule={schedule} />
                    ))}
            </ul>
        </div>
    );
};

const mapStateToProp = ({ schedules }) => ({
    listSchedule: schedules
});

const mapDispatchToProp = dispatch => ({
    getSchedules: () => dispatch(getSchedules())
});

export default connect(mapStateToProp, mapDispatchToProp)(ListSchedule);
