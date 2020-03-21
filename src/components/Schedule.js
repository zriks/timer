import React from "react";
import { Divider, Icon } from "semantic-ui-react";
import { isArray } from "lodash";
import ControlSchedule from "./ControlSchedule";

export default function Schedule({ schedule }) {
    return (
        <li className="list-item">
            <span className="time">
                <span>{schedule.fromDate}</span>
                <span className="drive"> - </span>
                <span>{schedule.toDate}</span>
            </span>
            <div className="subject">
                <span>{schedule.subject}</span>
            </div>
            <div className="event">
                <pre>{schedule.event}</pre>
            </div>
            <div className="type">
                <ul className="list-inline">
                    <li>{schedule.type}</li>
                </ul>
            </div>
            <span className="member">
                <label>
                    <Icon name="group" />
                </label>
                <ul className="list-inline">
                    {isArray(schedule.member) &&
                        schedule.member.map((value, index) => (
                            <li key={index}>{value.text}</li>
                        ))}
                </ul>
            </span>
            <ControlSchedule
                id={schedule.id}
                isCompleted={schedule.isCompleted}
                isBookMark={schedule.isBookMark}
            />
            <Divider inverted />
        </li>
    );
}
