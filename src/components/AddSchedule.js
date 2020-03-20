import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import TagsMember from "./TagsMember";

import { addSchedule } from "../redux/actions";

function AddSchedule({ addSchedule }) {
    const [input, setInput] = useState({
        subject: "",
        fromDate: "",
        toDate: "",
        event: "",
        type: "",
        member: [{ id: "me", text: "me" }],
        isCompleted: false,
        isBookMark: false,
        createAt: new Date()
    });
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);
    const { register, errors, handleSubmit } = useForm();

    const handleInputChange = e =>
        setInput({ ...input, [e.target.name]: e.target.value });

    const onSubmit = () => {
        addSchedule(input);
        setRedirectToReferrer(true);
    };

    if (redirectToReferrer) {
        return <Redirect to="/list" />;
    }

    return (
        <div className="add-schedule">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1>ADD SCHEDULE</h1>
                <Form.Field>
                    <label>Subject</label>
                    <input
                        type="text"
                        name="subject"
                        style={{ borderColor: errors.subject && "red" }}
                        placeholder="subject of schedule"
                        onChange={handleInputChange}
                        ref={register({ required: true, maxLength: 100 })}
                    />
                </Form.Field>
                <Form.Group widths="equal">
                    <Form.Field>
                        <label>From date</label>
                        <input
                            type="datetime-local"
                            name="fromDate"
                            onChange={handleInputChange}
                            style={{ borderColor: errors.fromDate && "red" }}
                            ref={register({ required: true })}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>To date</label>
                        <input
                            type="datetime-local"
                            name="toDate"
                            onChange={handleInputChange}
                            style={{ borderColor: errors.toDate && "red" }}
                            ref={register({ required: true })}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Field>
                    <label>Event</label>
                    <textarea
                        name="event"
                        onChange={handleInputChange}
                        style={{ borderColor: errors.event && "red" }}
                        ref={register({ required: true })}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Type</label>
                    <input
                        type="text"
                        list="typeSchedule"
                        placeholder="Enter type..."
                        name="type"
                        onChange={handleInputChange}
                        style={{ borderColor: errors.type && "red" }}
                        ref={register({ required: true })}
                    />
                    <datalist id="typeSchedule">
                        <option value="Job" />
                        <option value="Trip" />
                        <option value="Learn" />
                    </datalist>
                </Form.Field>
                <Form.Field>
                    <label>Member</label>
                    <TagsMember
                        name="member"
                        value={input.member}
                        onChange={handleInputChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Button type="submit" onSubmit={handleSubmit(onSubmit)}>
                        Add
                    </Button>
                </Form.Field>
            </Form>
        </div>
    );
}

const mapDispatchToProp = dispatch => ({
    addSchedule: value => dispatch(addSchedule(value))
});

export default connect(null, mapDispatchToProp)(AddSchedule);
