import React, { useEffect } from "react";
import { connect } from "react-redux";
import { isArray } from "lodash";
import { Dimmer, Loader } from "semantic-ui-react";
import { getSchedules } from "../redux/actions";
import common from "../helper/common";
import Schedule from "./Schedule";

const ListSchedule = ({ location, listSchedule, getSchedules }) => {
    useEffect(() => {
        const data = common.getDataFromQueryString(location.search);
        getSchedules(data);
    }, [getSchedules, location.search]);

    return (
        <div className="list-schedule">
            <Dimmer active={listSchedule.isLoading}>
                <Loader />
            </Dimmer>
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

const mapStateToProp = ({ schedule }) => ({
    listSchedule: schedule.schedules
});

const mapDispatchToProp = dispatch => ({
    getSchedules: value => dispatch(getSchedules(value))
});

export default connect(mapStateToProp, mapDispatchToProp)(ListSchedule);
