import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { isNull, isUndefined } from "lodash";
import TagsMember from "./TagsMember";

export default function FormSchedule({ schedule, onSubmit }) {
    const { register, errors, handleSubmit } = useForm();

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

    useEffect(() => {
        if (!isNull(schedule) && !isUndefined(schedule)) setInput(schedule);
    }, [schedule]);

    const handleInputChange = e =>
        setInput({ ...input, [e.target.name]: e.target.value });

    return (
        <>
            {input && (
                <Form
                    onSubmit={handleSubmit(ele =>
                        onSubmit({ ...input, ...ele })
                    )}
                >
                    <Form.Field>
                        <label>Subject</label>
                        <input
                            type="text"
                            name="subject"
                            style={{ borderColor: errors.subject && "red" }}
                            placeholder="subject of schedule"
                            onChange={handleInputChange}
                            value={input.subject}
                            ref={register({ required: true, maxLength: 100 })}
                        />
                    </Form.Field>
                    <Form.Group widths="equal">
                        <Form.Field>
                            <label>From date</label>
                            <input
                                type="datetime-local"
                                name="fromDate"
                                value={input.fromDate}
                                onChange={handleInputChange}
                                style={{
                                    borderColor: errors.fromDate && "red"
                                }}
                                ref={register({ required: true })}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>To date</label>
                            <input
                                type="datetime-local"
                                name="toDate"
                                value={input.toDate}
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
                            value={input.event}
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
                            value={input.type}
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
                        <Button
                            type="submit"
                            onSubmit={e => {
                                e.preventDefault();
                                handleSubmit(ele =>
                                    onSubmit({ ...input, ...ele })
                                );
                            }}
                        >
                            Submit
                        </Button>
                    </Form.Field>
                </Form>
            )}
        </>
    );
}
